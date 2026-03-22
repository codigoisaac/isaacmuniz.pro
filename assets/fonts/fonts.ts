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

export const saira = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-saira",
});

export const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

// ---

export const fontVariables = [
  geist.className, // default font
  geistMono.variable,
  saira.variable,
  transducer.variable,
  transducerExtended.variable,
].join(" ");
