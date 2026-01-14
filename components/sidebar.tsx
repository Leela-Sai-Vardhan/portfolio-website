"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Code, Award, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Introduction", href: "/", icon: Home },
    { name: "About Me", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Skills & Tools", href: "/skills", icon: Code },
    { name: "Experience", href: "/experience", icon: Award },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Stats", href: "/stats", icon: Award },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
            <div className="flex h-full flex-col gap-2 p-4">
                {/* Logo/Brand */}
                <div className="mb-4 px-3 py-2">
                    <h2 className="text-lg font-bold">Portfolio</h2>
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
    );
}
