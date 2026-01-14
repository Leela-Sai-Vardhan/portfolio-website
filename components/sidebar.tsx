"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Code, Award, Mail, Menu, X, ArrowUpRight, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/sidebar-context";
import { useFocusMode } from "@/components/focus-mode-context";

const navigation = [
    { name: "Introduction", href: "/", icon: Home },
    { name: "About Me", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Skills & Tools", href: "/skills", icon: Code },
    { name: "Experience", href: "/experience", icon: Award },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Studio", href: "/studio", icon: Monitor },
    { name: "Stats", href: "/stats", icon: Award },
];

export function Sidebar() {
    const pathname = usePathname();
    const { isCollapsed, setIsCollapsed } = useSidebar();
    const { isFocusMode } = useFocusMode();

    // Hide sidebar in focus mode
    if (isFocusMode) return null;

    return (
        <>
            {/* Collapsed Sidebar - Shows only hamburger */}
            {isCollapsed && (
                <aside className="fixed left-0 top-0 z-40 h-screen w-16 border-r border-border bg-card transition-all duration-300">
                    <div className="flex h-full flex-col items-center p-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsCollapsed(false)}
                            aria-label="Expand sidebar"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </aside>
            )}

            {/* Expanded Sidebar */}
            {!isCollapsed && (
                <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card transition-all duration-300">
                    <div className="flex h-full flex-col gap-2 p-4">
                        {/* Brand Name with Arrow - Clickable to Home */}
                        <div className="mb-4 border-b border-border pb-4">
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-3 py-2 hover:opacity-80 transition-opacity"
                            >
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                                <h2 className="text-lg font-bold">Vardhan</h2>
                            </Link>
                        </div>

                        {/* Sections Label with Collapse Button */}
                        <div className="flex items-center justify-between px-3 py-2">
                            <p className="text-sm text-muted-foreground">Sections</p>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsCollapsed(true)}
                                aria-label="Collapse sidebar"
                                className="h-6 w-6"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 space-y-1">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-smooth",
                                            isActive
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Footer */}
                        <div className="border-t border-border pt-4">
                            <p className="px-3 text-xs text-muted-foreground">
                                © 2026 Portfolio
                            </p>
                        </div>
                    </div>
                </aside>
            )}
        </>
    );
}
