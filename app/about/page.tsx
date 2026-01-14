import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="container mx-auto max-w-4xl px-6 py-16">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <p className="text-xl text-muted-foreground">
                        More than just a title—let's dive deeper!
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                        I am a passionate <span className="font-semibold text-foreground">Software Engineer</span> with
                        a knack for building full-stack web applications using modern technologies like{" "}
                        <span className="font-semibold text-foreground">Next.js</span>,{" "}
                        <span className="font-semibold text-foreground">React</span>, and{" "}
                        <span className="font-semibold text-foreground">Tailwind CSS</span>. My journey in tech began
                        with a curiosity for solving real-world problems through innovative solutions, which evolved
                        into a love for creating user-centric digital experiences.
                    </p>

                    <p>
                        With a strong foundation in <span className="font-semibold text-foreground">JavaScript frameworks</span>,
                        I focus on creating scalable, efficient, and visually appealing applications. Currently, I am diving
                        deeper into backend development with{" "}
                        <span className="font-semibold text-foreground">Node.js</span> and{" "}
                        <span className="font-semibold text-foreground">Express</span> to expand my skill set and deliver
                        powerful, server-side solutions.
                    </p>

                    <p>
                        Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with
                        creative solutions. I aim to contribute to impactful projects that make a difference in users' lives.
                    </p>

                    {/* Education */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <h3 className="mb-4 text-xl font-semibold">Education</h3>
                        <div className="space-y-2">
                            <p className="font-semibold">Bachelor of Technology in Computer Science</p>
                            <p className="text-muted-foreground">VRSEC</p>
                            <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
                            <p className="text-sm text-muted-foreground">CGPA: 8.5/10</p>
                        </div>
                    </div>

                    {/* What I'm Currently Doing */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <h3 className="mb-4 text-xl font-semibold">Currently</h3>
                        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                            <li>Building full-stack projects with Next.js and TypeScript</li>
                            <li>Contributing to open source projects</li>
                            <li>Participating in hackathons and coding competitions</li>
                            <li>Learning system design and scalability patterns</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex justify-between border-t border-border pt-8">
                <Button variant="ghost" asChild>
                    <Link href="/" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Introduction
                    </Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="/projects" className="gap-2">
                        Projects
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
