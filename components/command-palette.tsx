"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
    Home,
    User,
    Briefcase,
    Code,
    Award,
    Mail,
    Search,
    Moon,
    Sun,
    Focus,
} from "lucide-react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { useSidebar } from "@/components/sidebar-context";
import { useFocusMode } from "@/components/focus-mode-context";
import { useTheme } from "next-themes";

const navigation = [
    { name: "Introduction", href: "/", icon: Home },
    { name: "About Me", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Skills & Tools", href: "/skills", icon: Code },
    { name: "Experience", href: "/experience", icon: Award },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Stats", href: "/stats", icon: Award },
];

export function CommandPalette() {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const { isCollapsed } = useSidebar();
    const { toggleFocusMode, isFocusMode } = useFocusMode();
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => setOpen(true)}
                className="flex h-9 w-full max-w-sm items-center justify-between rounded-md border border-border bg-background/60 px-3 text-sm text-muted-foreground backdrop-blur-md transition-colors hover:bg-accent hover:text-accent-foreground"
            >
                <div className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    <span>Search sections...</span>
                </div>
                <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            {/* Command Dialog with dynamic positioning */}
            <div className={`transition-all duration-300 ${isCollapsed ? 'ml-0' : 'ml-32'}`}>
                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>

                        {/* Quick Actions */}
                        <CommandGroup heading="Quick Actions">
                            <CommandItem
                                onSelect={() => {
                                    runCommand(() => setTheme(theme === 'dark' ? 'light' : 'dark'));
                                }}
                            >
                                {theme === 'dark' ? (
                                    <Sun className="mr-2 h-4 w-4" />
                                ) : (
                                    <Moon className="mr-2 h-4 w-4" />
                                )}
                                <span>Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                                <kbd className="ml-auto text-xs text-muted-foreground">D</kbd>
                            </CommandItem>
                            <CommandItem
                                onSelect={() => {
                                    runCommand(() => toggleFocusMode());
                                }}
                            >
                                <Focus className="mr-2 h-4 w-4" />
                                <span>{isFocusMode ? 'Exit' : 'Enter'} Focus Mode</span>
                                <kbd className="ml-auto text-xs text-muted-foreground">F</kbd>
                            </CommandItem>
                        </CommandGroup>

                        {/* Navigation */}
                        <CommandGroup heading="Navigation">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <CommandItem
                                        key={item.href}
                                        onSelect={() => {
                                            runCommand(() => router.push(item.href));
                                        }}
                                    >
                                        <Icon className="mr-2 h-4 w-4" />
                                        <span>{item.name}</span>
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>

                        {/* External Links */}
                        <CommandGroup heading="Links">
                            <CommandItem
                                onSelect={() => {
                                    runCommand(() => window.open("https://github.com/Leela-Sai-Vardhan", "_blank"));
                                }}
                            >
                                <span className="mr-2">🔗</span>
                                <span>GitHub Profile</span>
                            </CommandItem>
                            <CommandItem
                                onSelect={() => {
                                    runCommand(() => window.open("https://www.linkedin.com/in/leela-sai-vardhan-dhavala/", "_blank"));
                                }}
                            >
                                <span className="mr-2">🔗</span>
                                <span>LinkedIn Profile</span>
                            </CommandItem>
                            <CommandItem
                                onSelect={() => {
                                    runCommand(() => window.open("/resume.pdf", "_blank"));
                                }}
                            >
                                <span className="mr-2">📄</span>
                                <span>Download Resume</span>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>
            </div>
        </>
    );
}
