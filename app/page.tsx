import { getAllBlogPosts } from "@/lib/api";
import { allProjects } from "@/data/portfolio";
import SeparatorDots from "@/components/SeparatorDots";
import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";
import HomeBlog from "@/components/home/HomeBlog";
import HomeTechStack from "@/components/home/HomeTechStack";
import HomeContact from "@/components/home/HomeContact";
import HomeShowcase from "@/components/home/HomeShowcase";
import HomeShowcaseWrapper from "@/components/home/HomeShowcaseWrapper";
import HomeBelief from "@/components/home/HomeBelief";
import HomeStats from "@/components/home/HomeStats";
import type { Metadata } from "next";
import { homeMetadata } from "@/data/seo/home.metadata";
import PersonSchema from "@/components/seo/PersonSchema";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = homeMetadata;

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

      <HomeShowcaseWrapper>
        <HomeShowcase />
      </HomeShowcaseWrapper>

      <HomeBelief />

      <HomeAbout />

      <HomeStats />

      <SeparatorDots />

      <HomeProjects projects={featuredProjects} />

      <SeparatorDots />

      <HomeBlog posts={featuredPosts} />

      <SeparatorDots />

      <HomeTechStack />

      <SeparatorDots />

      <HomeContact />

      <PersonSchema />

      <ScrollToTop />
    </>
  );
}
