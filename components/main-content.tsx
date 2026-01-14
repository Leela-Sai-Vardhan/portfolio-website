"use client";

import { useSidebar } from "@/components/sidebar-context";
import { Navbar } from "@/components/navbar";

export function MainContent({ children }: { children: React.ReactNode }) {
    const { isCollapsed } = useSidebar();

    return (
        <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'pl-16' : 'pl-64'}`}>
            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="pt-14">
                {children}
            </main>
        </div>
    );
}
