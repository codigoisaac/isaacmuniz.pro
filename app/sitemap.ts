import { MetadataRoute } from "next";
import siteMetadata from "@/data/siteMetadata";
import { allProjects } from "@/data/portfolio";
import { getAllBlogPosts } from "@/lib/api";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.siteUrl;

  // ─── Páginas estáticas ────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // ─── Projetos individuais ──────────────────────────────────────────────────
  const projectPages: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ─── Posts do blog ─────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
