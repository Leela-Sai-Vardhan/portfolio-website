import { cn } from "@/lib/utils";

interface TechBadgeProps {
    name: string;
    className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
    // Map of tech names to their SVG icons with brand colors
    const icons: Record<string, React.ReactNode> = {
        HTML: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#E34F26]">
                <path fill="currentColor" d="M4.69 2h22.62 l-2.06 23.09L16 30 6.75 25.09 4.69 2zm18.84 4.54H8.47l.86 9.68h11.23l-.42 4.69-4.14 1.12-4.14-1.12-.27-3.03H8.36l.49 6.22L16 26.06l7.15-1.98 1-11.23z" />
            </svg>
        ),
        CSS: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#1572B6]">
                <path fill="currentColor" d="M4.7 2h22.6l-2.06 23.1L16 30l-9.25-4.91L4.7 2zm18.84 4.54H8.5l.86 9.68h11.23l-.42 4.69-4.14 1.12-4.14-1.12-.27-3h-3.2l.49 6.22L16 26.06l7.15-1.98 1-11.23z" />
            </svg>
        ),
        JavaScript: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#F7DF1E]">
                <path fill="currentColor" d="M2.2 2H30v28H2.2V2zm18.6 21.7c0-2.3 2-3.6 4.6-3.6 1.1 0 2.2.3 3.1.7l.8-4.2c-1.3-.6-3-1-4.7-1-4.9 0-7.8 2.8-7.8 6.9 0 3.6 2.6 5 5.5 5 2.1 0 3.7-.6 4.9-1.3l.5 3.9c-1.3.8-3.3 1.2-5 1.2-4.1 0-7.2-2.3-7.2-6.5l.2-1.1H13v-3.7h.3c.7-1.1 1.7-1.7 3.2-1.7 1.4 0 2.2.6 2.7 1.8l.2.8h-6c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2h8.4v-1.6z" />
                <path fill="currentColor" d="M0 0h32v32H0z" className="text-transparent" />
                <path fill="#F7DF1E" d="M6 2h20v28H6z" />
                <path fill="#000" d="M20.2 22.1c1.2 0 1.9-.6 2.1-1.4l.2-1.1h4.1c-.2 2.6-2.2 4.6-6.1 4.6-3.2 0-5.4-1.6-5.4-5.1 0-4 2.8-6.1 6.8-6.1 2.4 0 4.1.6 5.3 1.1l-.8 3.3c-.9-.4-1.9-.7-3.1-.7-1.5 0-2.5.8-2.5 2.2 0 1.2.7 1.9 2.1 1.9S24 20.3 24 20.3l.4-2h-3v3.8h-1.2zM12.9 24.3v-9.7H17v2.7h-1.8c.8-.7 1.4-1.3 2.6-1.3 1.8 0 2.9 1.1 2.9 3.5v4.8h-4v-4.3c0-.9-.3-1.4-1-1.4s-1.2.5-1.2 1.6v4.1h-1.6z" />
            </svg>
        ),
        TypeScript: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#3178C6]">
                <path fill="currentColor" d="M2 2h28v28H2V2zm22.4 13.8c-.2-2.2-1.8-3.4-4.8-3.4-2.8 0-4.6 1.4-4.6 4 0 1.8 1.1 2.8 3.4 3.3l1.8.4c.9.2 1.3.5 1.3 1.1 0 .6-.5 1-1.6 1-1.3 0-2.4-.4-3.5-1l-.6 2.9c1.3.6 3 1 4.7 1 3.2 0 5-1.6 5-4.2 0-2-.9-3-3.4-3.6l-1.8-.4c-.7-.2-1.1-.5-1.1-1 0-.6.6-1 1.5-1 1.1 0 2 .3 2.8.7l.9-2.8zM11.6 24v-9.5H15v-3h-9v3h3.4V24h2.2z" />
            </svg>
        ),
        "Tailwind CSS": (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#06B6D4]">
                <path fill="currentColor" d="M9,13.7q1.4-2.1,3.3-1.6c1.8.6,1.4,3.3.4,4.9s-3.4,2-5.1,1.1S5.2,14.6,9,13.7Z" opacity=".5" /><path fill="currentColor" d="M18.7,13.7a4.67,4.67,0,0,1,3.3-1.6c1.8.6,1.4,3.3.4,4.9s-3.4,2-5.1,1.1S14.9,14.6,18.7,13.7Z" /><path fill="currentColor" d="M8.5,8A6,6,0,0,1,16.2,8q3.6,2.7,4.5,6a8.09,8.09,0,0,1-3.6,9.3,5.92,5.92,0,0,1-3.3.6,5.35,5.35,0,0,1-3.6-1.5q-2.1-2.1,0-5.1,1.5-2.1-1.2-3.3A2.86,2.86,0,0,0,6.6,14.3a4.57,4.57,0,0,0-.3,3.3l-3.3.9A7.25,7.25,0,0,1,4,10.2,6.17,6.17,0,0,1,8.5,8Z" />
            </svg>
        ),
        React: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#61DAFB]">
                <circle cx="16" cy="16" r="2.5" fill="currentColor" />
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="16" cy="16" rx="10" ry="4.5" />
                    <ellipse cx="16" cy="16" rx="10" ry="4.5" transform="rotate(60 16 16)" />
                    <ellipse cx="16" cy="16" rx="10" ry="4.5" transform="rotate(120 16 16)" />
                </g>
            </svg>
        ),
        "Next.js": (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-foreground">
                <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26.25a12.25 12.25 0 1 1 5.9-23l-13.6 17.5a12.18 12.18 0 0 1-4.55-6.75ZM11.6 11h1.75l8.45 10.85a12.21 12.21 0 0 1-5.1 2.8L11.6 11Zm13.6 3.9v9a12.22 12.22 0 0 1-1.35.4V14.9h1.35Z" />
            </svg>
        ),
        "Node.js": (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#339933]">
                <path fill="currentColor" d="M16 2L2 9v14l14 7 14-7V9L16 2zm-2 23.5v-6.9l-6-3.4V9.8l6-3.4 6 3.4v5.3l-1.5.8v-4.5l-4.5-2.6-4.5 2.6v5.2l4.5 2.6v6.9l-4.5-2.6zm6.8-6.1l-6-3.4 6-3.4 6 3.4-6 3.4z" />
            </svg>
        ),
        "Express.js": (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-foreground">
                <path fill="currentColor" d="M16,2L2,10v12l14,8l14-8V10L16,2z M20.5,21.5h-9v-11h9V21.5z" />
                <text x="13" y="20" fontSize="10" fontWeight="bold" fill="currentColor">ex</text>
            </svg>
        ),
        MongoDB: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#47A248]">
                <path fill="currentColor" d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm.3 23c-.3 0-.5-.1-.7-.3-.2-.2-.2-.5 0-.7l.1-.1c0-.1 2-5 2-8.5 0-3.6-2-5-2-5s-2 1.4-2 5c0 3.5 2 8.4 2 8.5l.1.1c.2.2.2.5 0 .7-.2.2-.4.3-.7.3h-.8c-.4 0-.8-.3-.8-.8V15c0-4.6 2.7-6.5 2.7-6.5S17 10.4 17 15v8.2c0 .5-.3.8-.7.8h0z" />
            </svg>
        ),
        PostgreSQL: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#336791]">
                <path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm1.6 22.8c-1.7 0-3.1-1.3-3.2-3h-2.1v2.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5c1.4 0 2.5-1.1 2.5-2.5h2.1c.1 1.6 1.5 2.8 3.2 2.8 1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2c-1.6 0-2.8 1.1-3.2 2.6h-2.1v-2.1c0-.2.1-.4.2-.6l6.3-4.2c.4-.3.5-.8.2-1.2s-1-.3-1.6.4l-5.6 3.7c-.5-1.4-1.9-2.5-3.5-2.5-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8c1.6 0 3-1.1 3.5-2.5h2.1c.1 1.6 1.4 2.8 3.1 2.8 1.7 0 3.1-1.4 3.1-3.1s-1.3-3.1-3.1-3.1z" />
            </svg>
        ),
        "REST APIs": (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#FF5733]">
                <path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 18c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.8-5.1l12.4 10.3c-1.7 1.7-3.9 2.8-6.2 2.8z" />
            </svg>
        ),
        Git: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#F05032]">
                <path fill="currentColor" d="M28.4 13.9L18.1 3.6c-1.1-1.1-2.9-1.1-4 0L3.6 14.1c-1.1 1.1-1.1 2.9 0 4l10.3 10.3c1.1 1.1 2.9 1.1 4 0l10.5-10.5c1.1-1.1 1.1-2.9 0-4zM16 20.2c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z" />
            </svg>
        ),
        GitHub: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-foreground">
                <path fill="currentColor" d="M16 2C8.1 2 1.7 8.4 1.7 16.3c0 6.3 4.1 11.7 9.8 13.6.7.1 1-.3 1-.7v-2.5c-4 .9-4.8-1.9-4.8-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.3 2.2 3.4 1.6 4.3 1.2.1-.9.5-1.6.9-2-3.2-.4-6.5-1.6-6.5-7.1 0-1.6.6-2.9 1.5-3.9-.1-.4-.7-1.8.1-3.8 0 0 1.2-.4 4 1.5 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.8-1.9 4-1.5 4-1.5.8 2 .2 3.4.1 3.8.9 1 1.5 2.3 1.5 3.9 0 5.5-3.3 6.7-6.5 7.1.5.4.9 1.3.9 2.6v3.8c0 .4.2.8 1 .7 5.7-1.9 9.8-7.3 9.8-13.6C30.3 8.4 23.9 2 16 2z" />
            </svg>
        ),
        "VS Code": (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#007ACC]">
                <path fill="currentColor" d="M23.5 23.9l-4.9-3.9 5.2-4.1 4.5 1.8c.8.3.9 1.4.2 1.9l-5 4.3zM4.1 21.6L27 6.4c1.1-.7 2.4.5 1.9 1.7L22.2 26.3c-.3.8-1.4.9-1.9.1L4.1 9.9c-.8-1.2.5-2.7 1.6-1.9l11.6 7.7-13.2 5.9z" />
            </svg>
        ),
        Figma: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#F24E1E]">
                <path fill="#F24E1E" d="M8 16c0-2.2 1.8-4 4-4h4v8h-4c-2.2 0-4-1.8-4-4z" />
                <path fill="#A259FF" d="M8 8c0-2.2 1.8-4 4-4h4v8h-4c-2.2 0-4-1.8-4-4z" />
                <path fill="#1ABCFE" d="M16 8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4v8z" />
                <path fill="#0ACF83" d="M8 24c0-2.2 1.8-4 4-4h4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4z" />
                <path fill="#FF7262" d="M16 16h4c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4v8z" />
            </svg>
        ),
        Docker: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#2496ED]">
                <path fill="currentColor" d="M29.5 13.9c-.2-.1-.5-.2-.7-.2h-2c-.1 0-.3.1-.4.2-.1.1-.2.3-.2.4v1.2c0 2-.8 3.8-2.1 5.2-.6.6-1.2 1.1-1.9 1.5-.7.4-1.5.7-2.3.9v3.4c3.4-.6 6.3-2.6 8.2-5.4 1-1.5 1.6-3.3 1.6-5.2 0-.9-.1-1.8-.1-2zm-27-2c-.1 0-.3.1-.4.2-.1.1-.2.3-.2.4v1.2c0 1.9.6 3.7 1.6 5.2 1.9 2.8 4.8 4.8 8.2 5.4v-3.4c-.8-.2-1.6-.5-2.3-.9-.7-.4-1.3-.9-1.9-1.5-1.3-1.4-2.1-3.2-2.1-5.2v-1.2c0-.2-.1-.3-.2-.4-.1-.1-.3-.2-.4-.2h-2z" />
                <path fill="currentColor" d="M18.8 19.8l-1.3-3.6-1.3 3.6h2.6zM16 2.5l-3.3 9.1h6.6L16 2.5z" opacity=".5" />
                <path fill="currentColor" d="M11 11h2v3h-2zm3 0h2v3h-2zm3 0h2v3h-2zm3 0h2v3h-2zm-9 4h2v3H11zm3 0h2v3h-2zm3 0h2v3h-2zm3 0h2v3h-2zm-6 4h2v3h-2zm3 0h2v3h-2zm-9-8h2v3H5zm0 4h2v3H5zm18-8h2v3h-2z" />
            </svg>
        ),
        Vercel: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-foreground">
                <path fill="currentColor" d="M16 2L2 28h28L16 2z" />
            </svg>
        ),
        Redis: (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#DC382D]">
                <path fill="currentColor" d="M26 12h-4V8h4c1.1 0 2 .9 2 2s-.9 2-2 2zm-6 0h-4V8h4v4zm-6 0h-4V8h4v4zm-6 0H4V8h4v4zm18 6h-4v-4h4c1.1 0 2 .9 2 2s-.9 2-2 2zm-6 0h-4v-4h4v4zm-6 0h-4v-4h4v4zm-6 0H4v-4h4v4zm18 6h-4v-4h4c1.1 0 2 .9 2 2s-.9 2-2 2zm-6 0h-4v-4h4v4zm-6 0h-4v-4h4v4zm-6 0H4v-4h4v4z" />
            </svg>
        ),
        "System Design": (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#007ACC]">
                <path fill="currentColor" d="M26 10h-4V6h4c1.1 0 2 .9 2 2s-.9 2-2 2zm-6 0h-8V6h8v4zm-10 0H6V6h4v4zm16 6h-4v-4h4c1.1 0 2 .9 2 2s-.9 2-2 2zm-6 0h-8v-4h8v4zm-10 0H6v-4h4v4zm16 6h-4v-4h4c1.1 0 2 .9 2 2s-.9 2-2 2zm-6 0h-8v-4h8v4zm-10 0H6v-4h4v4z" />
            </svg>
        ),
        "GraphQL": (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#E10098]">
                <path fill="currentColor" d="M16 2L3.7 9.1v13.8L16 30l12.3-7.1V9.1L16 2zm0 3.5l8.7 5-3.3 1.9-5.4-3.1-5.4 3.1-3.3-1.9 8.7-5zm-9.3 16.1l-2.4-1.4v-9l2.4-1.4 8.7 5v5.3l-8.7 1.5zm18.6-1.4l-2.4 1.4-8.7-1.5v-5.3l8.7-5 2.4 1.4v9z" />
            </svg>
        ),
        "AWS": (
            <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#FF9900]">
                <path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 24c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm-1-14h2v6.5l3.5-3.5 1.4 1.4-6 6-6-6 1.4-1.4 3.5 3.5V12z" />
            </svg>
        ),
        "shadcn/ui": (
            <svg viewBox="0 0 256 256" className="h-5 w-5 text-foreground">
                <path fill="none" d="M0 0h256v256H0z" />
                <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
        ),
        "Material UI": (
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0081CB]">
                <path fill="currentColor" d="M0 2.776v5.333l11.08 6.232L24 8.11V2.776L11.08 9.01zM12.92 15.655l-1.84.992-1.84-.992v-5.45l1.84-1.037 1.84 1.037zM0 13.926l11.08 6.223v-5.333L0 8.592zM24 13.926l-11.08-6.233v5.334l11.08 6.222z" />
            </svg>
        ),
        "Framer Motion": (
            <svg viewBox="0 0 16 24" className="h-5 w-5 text-foreground">
                <path fill="currentColor" d="M0 0h8l8 8H8zM8 8h8l-8 8H0zM0 16h8l-8 8z" />
            </svg>
        ),
        "Supabase": (
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#3ECF8E]">
                <path fill="currentColor" d="M11.764 0a1.88 1.88 0 0 0-1.63 2.768L2.57 16.632A1.879 1.879 0 0 0 4.2 19.5h7.228l-1.83 4.238a1.88 1.88 0 0 0 3.484 1.488l7.56-13.864a1.882 1.882 0 0 0-1.64-2.766H11.76l1.833-4.238A1.881 1.881 0 0 0 11.764 0" />
            </svg>
        ),
        "Redux": (
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#764ABC]">
                <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            </svg>
        ),
        "Postman": (
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FF6C37]">
                <path fill="currentColor" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm4.5 9h-9c-2.484 0-4.5 2.016-4.5 4.5S5.016 18 7.5 18h9c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5z" />
            </svg>
        ),
        "npm": (
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#CB3837]">
                <path fill="currentColor" d="M0 7.5h24v9H0z" />
                <path fill="#fff" d="M2.25 10.25h15v4.5h-3v-3h-3v3h-9zM20.25 10.25h3v4.5h-3z" />
            </svg>
        )
    };

    return (
        <div
            className={cn(
                "group flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 shadow-sm transition-all hover:border-primary/50 hover:shadow-md",
                className
            )}
        >
            <div className="flex h-5 w-5 items-center justify-center">
                {icons[name] || (
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted-foreground">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                )}
            </div>
            <span className="font-medium">{name}</span>
        </div>
    );
}
