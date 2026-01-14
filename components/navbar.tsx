"use client";

import { Moon, Sun, Github, Linkedin, FileText, Music } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CommandPalette } from "@/components/command-palette";
import { LiveClock } from "@/components/live-clock";

export function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="fixed left-64 right-0 top-0 z-30 border-b border-border/40 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center justify-between gap-4 px-6">
                {/* Left side - Search Bar */}
                <div className="flex-1 max-w-md">
                    <CommandPalette />
                </div>

                {/* Right side - Utilities */}
                <div className="flex items-center gap-3">
                    {/* Live Clock */}
                    <LiveClock />

                    {/* Divider */}
                    <div className="h-4 w-px bg-border" />

                    {/* Music Toggle (Optional) */}
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Music className="h-4 w-4" />
                        <span className="sr-only">Toggle music</span>
                    </Button>

                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    {/* GitHub Link */}
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a
                            href="https://github.com/Leela-Sai-Vardhan"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
