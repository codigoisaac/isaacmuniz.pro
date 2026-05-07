export type PublicationPlatform = "devto" | "hashnode";

export interface BlogPost {
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  content: string;
  isDraft: boolean;
  publishedOn?: Partial<Record<PublicationPlatform, string>>;
}
