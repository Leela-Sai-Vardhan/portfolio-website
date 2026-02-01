"use client";

import { Moon, Sun, Github, Linkedin, FileText, Music, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CommandPalette } from "@/components/command-palette";
import { LiveClock } from "@/components/live-clock";
import { useFocusMode } from "@/components/focus-mode-context";
import { useSidebar } from "@/components/sidebar-context";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const { isFocusMode } = useFocusMode();
    const { isCollapsed, setIsCollapsed } = useSidebar();

    // Hide navbar in focus mode
    if (isFocusMode) return null;

    return (
        <header className={`fixed right-0 top-0 z-30 border-b border-border/40 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${isCollapsed ? 'left-0 md:left-16' : 'left-0 md:left-64'
            }`}>
            <div className="flex h-14 items-center justify-between gap-4 px-4 md:px-6">
                {/* Left side - Mobile Menu Button + Search Bar */}
                <div className="flex items-center gap-3 flex-1">
                    {/* Mobile Menu Button - Only visible on mobile */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 md:hidden"
                        onClick={() => setIsCollapsed(false)}
                        aria-label="Open menu"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md">
                        <CommandPalette />
                    </div>
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
