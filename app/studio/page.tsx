import Link from "next/link";
import { ArrowLeft, Monitor, Cpu, HardDrive, Keyboard, Mouse, Code, Terminal, Palette, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const hardware = [
    {
        category: "Computer",
        icon: Cpu,
        items: [
            { name: "Processor", value: "13th Gen Intel Core i7-13620H (2.40 GHz)" },
            { name: "RAM", value: "16GB (15.7GB usable)" },
            { name: "GPU", value: "Integrated Graphics" },
        ]
    },
    {
        category: "Display",
        icon: Monitor,
        items: [
            { name: "Monitor", value: "24\" Full HD Display" },
            { name: "Resolution", value: "1920x1080" },
        ]
    },
    {
        category: "Peripherals",
        icon: Keyboard,
        items: [
            { name: "Keyboard", value: "Mechanical Keyboard" },
            { name: "Mouse", value: "Wireless Mouse" },
        ]
    },
    {
        category: "Storage",
        icon: HardDrive,
        items: [
            { name: "Primary", value: "512GB SSD" },
        ]
    },
];

const software = [
    {
        category: "Code Editor",
        icon: Code,
        items: [
            { name: "VS Code", value: "Primary editor" },
            { name: "Extensions", value: "ESLint, Prettier, GitLens" },
            { name: "Theme", value: "One Dark Pro" },
        ]
    },
    {
        category: "Terminal",
        icon: Terminal,
        items: [
            { name: "Shell", value: "PowerShell" },
            { name: "Font", value: "Cascadia Code" },
        ]
    },
    {
        category: "Design Tools",
        icon: Palette,
        items: [
            { name: "Figma", value: "UI/UX Design" },
            { name: "Excalidraw", value: "Diagrams" },
        ]
    },
    {
        category: "Development",
        icon: Package,
        items: [
            { name: "Node.js", value: "v20.x" },
            { name: "Git", value: "Version control" },
            { name: "Docker", value: "Containerization" },
        ]
    },
];

export default function StudioPage() {
    return (
        <div className="container mx-auto max-w-5xl px-6 py-16">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Studio</h1>
                    <p className="text-xl text-muted-foreground">
                        A peek into my development environment and the tools I use daily.
                    </p>
                </div>

                {/* Hardware Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Hardware</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {hardware.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <div
                                    key={index}
                                    className="glass-card glass-card-hover rounded-lg p-6 space-y-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-lg bg-primary/10 p-2">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold">{section.category}</h3>
                                    </div>
                                    <div className="space-y-2">
                                        {section.items.map((item, i) => (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">{item.name}</span>
                                                <span className="font-medium">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Software Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Software & Tools</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {software.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <div
                                    key={index}
                                    className="glass-card glass-card-hover rounded-lg p-6 space-y-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-lg bg-primary/10 p-2">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold">{section.category}</h3>
                                    </div>
                                    <div className="space-y-2">
                                        {section.items.map((item, i) => (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">{item.name}</span>
                                                <span className="font-medium">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Productivity Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Productivity</h2>
                    <div className="glass-card rounded-lg p-6 space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <h4 className="font-semibold mb-2">Favorite Apps</h4>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li>• Notion - Note-taking & organization</li>
                                    <li>• Spotify - Music while coding</li>
                                    <li>• Discord - Community & collaboration</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Learning Resources</h4>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li>• MDN Web Docs</li>
                                    <li>• Next.js Documentation</li>
                                    <li>• GitHub Repositories</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-16 flex justify-between border-t border-border pt-8">
                    <Button variant="ghost" asChild>
                        <Link href="/stats" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Stats
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
