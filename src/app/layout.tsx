import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { FavoritesProvider } from "@/features/favorites/FavoritesProvider";

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) } : {}),
  title: {
    default: "Cookoing — Good food, made for real life",
    template: "%s | Cookoing",
  },
  description: "Find approachable recipes, thoughtful cooking tips and fresh inspiration for your everyday table.",
  applicationName: "Cookoing",
  openGraph: {
    type: "website",
    title: "Cookoing — Good food, made for real life",
    description: "Recipes worth slowing down for.",
    siteName: "Cookoing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookoing — Good food, made for real life",
    description: "Recipes worth slowing down for.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="cookoing-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try { const saved = localStorage.getItem("cookoing:theme"); const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; document.documentElement.dataset.theme = saved === "dark" || saved === "light" ? saved : preferred; } catch { document.documentElement.dataset.theme = "light"; }`,
          }}
        />
        <ThemeProvider>
          <FavoritesProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
