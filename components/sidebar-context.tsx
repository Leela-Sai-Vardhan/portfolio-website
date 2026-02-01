"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SidebarContextType {
    isCollapsed: boolean;
    setIsCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
    // Default to collapsed, will be updated based on screen size
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Set initial state based on screen size
    useEffect(() => {
        const handleResize = () => {
            // On desktop (md and above), sidebar is open by default
            // On mobile, sidebar is closed by default
            const isDesktop = window.innerWidth >= 768; // md breakpoint
            setIsCollapsed(!isDesktop);
        };

        // Set initial state
        handleResize();

        // Listen for window resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
            <div className={isCollapsed ? "sidebar-collapsed" : "sidebar-expanded"}>
                {children}
            </div>
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
