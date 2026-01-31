import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/sidebar-context";
import { MainContent } from "@/components/main-content";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import { FocusModeProvider } from "@/components/focus-mode-context";

export const metadata: Metadata = {
  title: "Leela Sai Vardhan Dhavala - Full-Stack & App Developer",
  description: "Portfolio showcasing web and mobile app development projects. Published 2 apps on Google Play Store (Earrupai & Trinetra). Open to full-stack and mobile development internship opportunities.",
  keywords: [
    "Leela Sai Vardhan Dhavala",
    "Full Stack Developer",
    "App Developer",
    "Mobile Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Android Developer",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Google Play Store",
    "Earrupai",
    "Trinetra",
  ],
  authors: [{ name: "Leela Sai Vardhan Dhavala" }],
  creator: "Leela Sai Vardhan Dhavala",
  metadataBase: new URL("https://sai-vardhan-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sai-vardhan-portfolio.vercel.app",
    siteName: "Leela Sai Vardhan Dhavala - Portfolio",
    title: "Leela Sai Vardhan Dhavala - Full-Stack & App Developer",
    description: "Portfolio showcasing web and mobile app development. Published 2 apps on Google Play Store. Skills in React, Next.js, Flutter, TypeScript, and more. Open to full-stack and mobile development internships.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leela Sai Vardhan Dhavala - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leela Sai Vardhan Dhavala - Full-Stack & App Developer",
    description: "Portfolio showcasing web and mobile app development. Published 2 apps on Google Play Store. Open to full-stack and mobile development internships.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Leela Sai Vardhan Dhavala",
              url: "https://sai-vardhan-portfolio.vercel.app",
              jobTitle: "Full-Stack & Mobile App Developer",
              description: "Developer specializing in React, Next.js, Flutter, and modern web/mobile technologies. Published 2 apps on Google Play Store (Earrupai & Trinetra). Open to full-stack and mobile development internship opportunities.",
              sameAs: [
                "https://github.com/Leela-Sai-Vardhan",
                "https://www.linkedin.com/in/leela-sai-vardhan-dhavala/",
                "https://www.reddit.com/user/Leela_sai_vardhan/",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FocusModeProvider>
            <KeyboardShortcuts />
            <SidebarProvider>
              <div className="relative flex min-h-screen">
                {/* Animated Grid Background */}
                <div className="fixed inset-0 -z-10">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0_/_0.07)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.07)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,oklch(1_0_0_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.05)_1px,transparent_1px)]" />
                </div>

                {/* Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <MainContent>{children}</MainContent>
              </div>
            </SidebarProvider>
          </FocusModeProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
