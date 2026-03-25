import "./globals.css";

import AppHeader from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import ThemeProvider from "@/context/ThemeProvider";
import clsx from "clsx";
import { fontVariables } from "@/assets/fonts/fonts";
import FaviconSwitcher from "@/components/layout/FaviconSwitcher";
import FaviconScript from "@/components/layout/FaviconScript";
import { globalMetadata } from "@/data/seo/global.metadata";

export const metadata: Metadata = globalMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <FaviconScript />
      </head>
      <ThemeProvider>
        <body
          className={clsx(
            fontVariables,
            "antialiased flex flex-col min-h-screen",
          )}
        >
          <FaviconSwitcher />

          <AppHeader />

          <main className="general-content-margins body-content-paddings w-full grow">
            {children}
          </main>

          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
