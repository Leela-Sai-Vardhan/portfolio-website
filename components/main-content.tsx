"use client";

import { useSidebar } from "@/components/sidebar-context";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { useFocusMode } from "@/components/focus-mode-context";

export function MainContent({ children }: { children: React.ReactNode }) {
    const { isCollapsed } = useSidebar();
    const { isFocusMode } = useFocusMode();

    return (
        <div className={`flex-1 transition-all duration-300 ${isFocusMode
            ? 'pl-0'
            : isCollapsed
                ? 'pl-0 md:pl-16'  // No padding on mobile, small padding on desktop when collapsed
                : 'pl-0 md:pl-64'  // No padding on mobile, full padding on desktop when expanded
            }`}>
            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className={isFocusMode ? 'pt-0' : 'pt-14'}>
                <PageTransition>{children}</PageTransition>
            </main>
        </div>
    );
}
