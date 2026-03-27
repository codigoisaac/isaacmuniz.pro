import ScrollToTop from "@/components/layout/ScrollToTop";
import PageHeader from "@/components/PageHeader";
import ProjectsListComplete from "@/components/portfolio/ProjectsListComplete";
import { portfolioMetadata } from "@/data/seo/portfolio.metadata";
import type { Metadata } from "next";

export const metadata: Metadata = portfolioMetadata;

export default function PortfolioPage() {
  return (
    <>
      <PageHeader text="/portfolio" />

      <ProjectsListComplete />

      <ScrollToTop />
    </>
  );
}
