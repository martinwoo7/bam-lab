import type { Metadata } from "next";
import { Merriweather, Montserrat } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";
import { cn } from "@/lib/utils";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

import Analytics from "@/components/analytics";

const montserratSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const merriweatherSerif = Merriweather({
  variable: "--font-serif",
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
      <body
        className={cn(
          "text-foreground group/body xl:[--footer-height:calc(var(--spacing)*24)] overscroll-none [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)]",
          `${montserratSans.variable} ${merriweatherSerif.variable} antialiased`
        )}
      >
        <Analytics />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Toaster toastOptions={{ style: { background: "#ede9de" } }} />
      </body>
    </html>
  );
}
