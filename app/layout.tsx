import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/sidebar-context";
import { MainContent } from "@/components/main-content";

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
          <SidebarProvider>
            <div className="relative flex min-h-screen">
              {/* Sidebar */}
              <Sidebar />

              {/* Main Content Area */}
              <MainContent>{children}</MainContent>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
