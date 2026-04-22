import { BlogPost } from "@/interfaces/blog-post";
import fs from "fs";
import { join } from "path";
import grayMatter from "gray-matter";

const blogPostsDirectory = join(process.cwd(), "data", "blog-posts");

export function getBlogPostSlugs() {
  return fs.readdirSync(blogPostsDirectory);
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const cleanSlug = slug.replace(/\.md$/, "");
  const fullBlogPostPath = join(blogPostsDirectory, `${cleanSlug}.md`);
  const fileContents = fs.readFileSync(fullBlogPostPath, "utf8");
  const { data, content } = grayMatter(fileContents);

  return {
    ...data,
    date: toIsoDate(data.date, cleanSlug),
    slug: cleanSlug,
    content,
  } as BlogPost;
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogPostSlugs();
  const blogPosts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((blogPost) => !blogPost.isDraft)
    .sort((blogPost1, blogPost2) => (blogPost1.date > blogPost2.date ? -1 : 1));

  return blogPosts;
}

function toIsoDate(rawDate: unknown, slug: string): string {
  let isoString: string;

  if (rawDate instanceof Date) {
    isoString = rawDate.toISOString().split("T")[0];
  } else if (typeof rawDate === "string") {
    isoString = rawDate;
  } else {
    throw new Error(
      `[${slug}] campo "date" ausente ou com tipo inválido no frontmatter`,
    );
  }

  if (!/^\d{4}-\d{2}-\d{2}/.test(isoString)) {
    throw new Error(
      `[${slug}] campo "date" inválido: "${isoString}". Use formato ISO 8601 (ex: "2023-09-01")`,
    );
  }

  return isoString;
}
