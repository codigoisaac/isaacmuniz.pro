import { Saira, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

// --- Local Fonts ---

export const transducer = localFont({
  src: "./transducer-regular.woff2",
  variable: "--font-transducer",
  display: "swap",
});

export const transducerExtended = localFont({
  src: "./transducer-extendedregular.woff2",
  variable: "--font-transducer-extended",
  display: "swap",
});

// --- Google Fonts ---

// Apenas os pesos usados no projeto — evita baixar a variable font inteira
export const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-saira",
  preload: true,
});

export const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  preload: false,
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
  preload: false,
});

// ---

export const fontVariables = [
  geist.className, // default font do body
  geistMono.variable,
  saira.variable,
  transducer.variable,
  transducerExtended.variable,
].join(" ");
