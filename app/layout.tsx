import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";

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
          <div className="relative flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area - responsive to sidebar */}
            <div className="flex-1 transition-all duration-300 pl-64">
              {/* Note: Sidebar collapse handled via CSS in sidebar component */}
              {/* Navbar */}
              <Navbar />

              {/* Page Content */}
              <main className="pt-14">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
