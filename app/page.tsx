import { getAllBlogPosts } from "@/lib/api";
import { allProjects } from "@/data/portfolio";
import SeparatorDots from "@/components/SeparatorDots";
import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";
import HomeBlog from "@/components/home/HomeBlog";
import HomeContact from "@/components/home/HomeContact";
import HomeShowcase from "@/components/home/HomeShowcase";

const FEATURED_PROJECT_SLUGS = ["itver", "bettha", "mimo"];

const FEATURED_POST_SLUGS = [
  "angular-bindings",
  "bits",
  "laravel-primeiras-impressoes",
];

export default function HomePage() {
  const allPosts = getAllBlogPosts().filter((p) => !p.isDraft);

  const featuredProjects = allProjects
    .filter((p) => FEATURED_PROJECT_SLUGS.includes(p.slug))
    .sort(
      (a, b) =>
        FEATURED_PROJECT_SLUGS.indexOf(a.slug) -
        FEATURED_PROJECT_SLUGS.indexOf(b.slug),
    );

  const featuredPosts = allPosts
    .filter((p) => FEATURED_POST_SLUGS.includes(p.slug))
    .sort(
      (a, b) =>
        FEATURED_POST_SLUGS.indexOf(a.slug) -
        FEATURED_POST_SLUGS.indexOf(b.slug),
    );

  return (
    <>
      <HomeHero />

      <HomeShowcase />

      <HomeAbout />

      <SeparatorDots />

      <HomeProjects projects={featuredProjects} />

      <SeparatorDots />

      <HomeBlog posts={featuredPosts} />

      <SeparatorDots />

      <HomeContact />
    </>
  );
}
