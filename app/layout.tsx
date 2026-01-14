import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/sidebar-context";
import { MainContent } from "@/components/main-content";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";

export const metadata: Metadata = {
  title: "Leela Sai Vardhan Dhavala - Full-Stack Developer",
  description: "Portfolio website showcasing projects, skills, and experience. Open to full-stack internship opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
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
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
