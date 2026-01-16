import { BlogPost } from "@/interfaces/blog-post";
import fs from "fs";
import { join } from "path";
import grayMatter from "gray-matter";

const blogPostsDirectory = join(process.cwd(), "data", "blog-posts");

export function getBlogPostSlugs() {
  return fs.readdirSync(blogPostsDirectory);
}

export function getBlogPostBySlug(slug: string) {
  const cleanSlug = slug.replace(/\.md$/, "");
  const fullBlogPostPath = join(blogPostsDirectory, `${cleanSlug}.md`);
  const fileContents = fs.readFileSync(fullBlogPostPath, "utf8");
  const { data, content } = grayMatter(fileContents);

  return {
    ...data,
    date: formatDate(data.date),
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

function formatDate(dateObj: Date): string {
  const date = dateObj;

  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  const year = date.getFullYear();

  const result = `${year} - ${monthName}`;

  return result;
}
