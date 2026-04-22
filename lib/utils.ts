import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes CSS usando clsx para lógica condicional
 * e tailwind-merge para evitar conflitos de classes do Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formata uma data ISO 8601 para o formato de exibição do blog: "YYYY - Mês".
 * Ex: "2023-09-01" → "2023 - Setembro"
 */
export function formatBlogDate(isoDate: string): string {
  const date = new Date(isoDate + "T00:00:00");

  if (isNaN(date.getTime())) {
    throw new Error(`formatBlogDate: data ISO inválida: "${isoDate}"`);
  }

  const rawMonth = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
  const month = rawMonth.charAt(0).toUpperCase() + rawMonth.slice(1);
  const year = date.getFullYear();

  return `${year} - ${month}`;
}
