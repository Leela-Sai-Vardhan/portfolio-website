import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = {
    frontend: [
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
    ],
    backend: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "MongoDB", level: "Beginner" },
        { name: "PostgreSQL", level: "Beginner" },
        { name: "REST APIs", level: "Intermediate" },
    ],
    tools: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Figma", level: "Intermediate" },
        { name: "Docker", level: "Beginner" },
        { name: "Vercel", level: "Intermediate" },
    ],
    learning: [
        { name: "System Design", level: "Learning" },
        { name: "GraphQL", level: "Learning" },
        { name: "AWS", level: "Learning" },
        { name: "Redis", level: "Learning" },
    ],
};

export default function SkillsPage() {
    return (
        <div className="container mx-auto max-w-5xl px-6 py-16">
            <div className="space-y-8">
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
                <div className="space-y-8">
                    {/* Frontend */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Frontend Development</h3>
                        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                            {skills.frontend.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                                >
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-xs text-muted-foreground">{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Backend Development</h3>
                        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                            {skills.backend.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                                >
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-xs text-muted-foreground">{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Tools & Technologies</h3>
                        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                            {skills.tools.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                                >
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-xs text-muted-foreground">{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Currently Learning */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Currently Learning</h3>
                        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                            {skills.learning.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded-lg border border-primary/50 bg-primary/5 p-4"
                                >
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-xs text-primary">{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex justify-between border-t border-border pt-8">
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
