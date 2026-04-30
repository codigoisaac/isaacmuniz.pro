import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes CSS usando clsx para lógica condicional
 * e tailwind-merge para evitar conflitos de classes do Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

/** Estima o tempo de leitura em minutos (200 wpm). Retorna no mínimo 1 min. */
export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Formata uma data ISO 8601 para o formato de exibição do blog: "YYYY - Mês - DD".
 * Ex: "2023-09-01" → "2023 - Setembro - 01"
 */
export function formatBlogDate(isoDate: string): string {
  const date = new Date(isoDate + "T00:00:00");

  if (isNaN(date.getTime())) {
    throw new Error(`formatBlogDate: data ISO inválida: "${isoDate}"`);
  }

  const rawMonth = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
  const month = rawMonth.charAt(0).toUpperCase() + rawMonth.slice(1);
  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, "0");

  return `${year} - ${month} - ${day}`;
}
