import localFont from "next/font/local";

// --- Transducer ---

export const transducer = localFont({
  src: "./transducer-regular.woff2",
  variable: "--font-transducer",
  display: "swap",
  preload: false,
});

export const transducerExtended = localFont({
  src: "./transducer-extendedregular.woff2",
  variable: "--font-transducer-extended",
  display: "swap",
  preload: false,
});

// --- Saira ---

export const saira = localFont({
  src: [
    { path: "./saira-400.woff2", weight: "400", style: "normal" },
    { path: "./saira-500.woff2", weight: "500", style: "normal" },
    { path: "./saira-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-saira",
  display: "swap",
  preload: false,
});

// --- Geist ---

export const geist = localFont({
  src: "./geist-400.woff2",
  variable: "--font-geist",
  display: "swap",
  preload: false,
});

// --- Geist Mono ---

export const geistMono = localFont({
  src: [
    { path: "./geist-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./geist-mono-500.woff2", weight: "500", style: "normal" },
    { path: "./geist-mono-600.woff2", weight: "600", style: "normal" },
    { path: "./geist-mono-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-mono",
  display: "swap",
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
