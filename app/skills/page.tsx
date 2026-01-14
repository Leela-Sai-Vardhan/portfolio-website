"use client";

import Link from "next/link"; // Added missing import
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/tech-badge";
import { useSidebar } from "@/components/sidebar-context";

export default function SkillsPage() {
    const { isCollapsed } = useSidebar();

    return (
        <div className="container mx-auto px-6 py-16 transition-all duration-300">
            <div className="space-y-8 max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Skills & Tools</h1>
                    <p className="text-xl text-muted-foreground">
                        Learned by coding all night and debugging all day!
                    </p>
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed">
                    As a full-stack Software Engineer, I specialize in building scalable web applications using modern
                    technologies such as <span className="font-semibold text-foreground">Next.js</span>,{" "}
                    <span className="font-semibold text-foreground">React</span>, and{" "}
                    <span className="font-semibold text-foreground">Tailwind CSS</span>. I'm also expanding my
                    expertise into DevOps and cloud practices to create efficient, maintainable, robust web solutions.
                </p>

                {/* Skills Sections */}
                <div className="space-y-12">
                    {/* Frontend */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold">Frontend Development</h3>
                        <div className="flex flex-wrap gap-3">
                            {["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "shadcn/ui", "Material UI", "Framer Motion", "React", "Next.js"].map((tech) => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold">Backend Development</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase", "Redis", "REST APIs", "GraphQL"].map((tech) => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                        </div>
                    </div>

                    {/* Tools & DevOps */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold">Tools & DevOps</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Git", "GitHub", "VS Code", "Postman", "npm", "Docker", "Vercel", "AWS"].map((tech) => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                            {/* Figma was listed in previous version, adding it back if relevant, or "System Design" */}
                            <TechBadge name="Figma" />
                        </div>
                    </div>

                    {/* Additional/Learning */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold">Currently Learning / Concepts</h3>
                        <div className="flex flex-wrap gap-3">
                            {["System Design"].map((tech) => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex justify-between border-t border-border pt-8 max-w-6xl mx-auto">
                <Button variant="ghost" asChild>
                    <Link href="/projects" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Projects
                    </Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="/experience" className="gap-2">
                        Experience
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
