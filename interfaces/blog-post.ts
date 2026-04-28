export interface BlogPost {
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  content: string;
  isDraft: boolean;
}
