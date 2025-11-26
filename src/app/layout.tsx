import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";
import { cn } from "@/lib/utils";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://analytics.calicode.dev/script.js"
          data-website-id="75286def-8134-424d-8991-94af71daeb05"
        />
      </head>
      <body
        className={cn(
          "text-foreground group/body xl:[--footer-height:calc(var(--spacing)*24)] overscroll-none [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)]",
          `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
