"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Code, Award, Mail, Menu, X, Linkedin, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
    { name: "Introduction", href: "/", icon: Home },
    { name: "About Me", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Skills & Tools", href: "/skills", icon: Code },
    { name: "Experience", href: "/experience", icon: Award },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Stats", href: "/stats", icon: Award },
];

const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/leela-sai-vardhan-dhavala-284024339/", icon: Linkedin, external: true },
    { name: "Resume", href: "/resume.pdf", icon: FileText, external: true },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            {/* Collapsed Sidebar - Shows only hamburger */}
            {isCollapsed && (
                <aside className="fixed left-0 top-0 z-40 h-screen w-16 border-r border-border bg-card">
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
                <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
                    <div className="flex h-full flex-col gap-2 p-4">
                        {/* Logo/Brand with Collapse Button */}
                        <div className="mb-4 flex items-center justify-between px-3 py-2">
                            <div>
                                <h2 className="text-lg font-bold">Portfolio</h2>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsCollapsed(true)}
                                aria-label="Collapse sidebar"
                                className="h-8 w-8"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-1 border-b border-border pb-4">
                            {quickLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = !link.external && pathname === link.href;

                                if (link.external) {
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:bg-accent hover:text-accent-foreground"
                                        >
                                            <Icon className="h-4 w-4" />
                                            {link.name}
                                        </a>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-smooth",
                                            isActive
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Sections Label */}
                        <div className="px-3 py-2">
                            <p className="text-sm text-muted-foreground">Sections</p>
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
