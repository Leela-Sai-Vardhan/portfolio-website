import Link from "next/link";
import { ArrowRight, ArrowLeft, Github, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "DevConnect - Developer Community Platform",
        description: "A platform for developers to share projects, get feedback, and collaborate with peers. Features real-time chat, project showcases, and skill-based matching.",
        status: "In Progress",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "WebSockets"],
        github: "https://github.com/yourusername/devconnect",
        demo: null,
        learnings: [
            "Implemented real-time features using WebSockets",
            "Designed scalable database schema with Supabase",
            "Built authentication system with JWT",
        ],
    },
    {
        title: "CodeSnap - Code Snippet Manager",
        description: "Save, organize, and share code snippets with syntax highlighting. Features collections, tags, and search functionality for easy snippet management.",
        status: "Planned",
        tech: ["React", "Node.js", "MongoDB", "Express", "Prism.js"],
        github: null,
        demo: null,
        learnings: [
            "Planning CRUD operations with RESTful API",
            "Designing search functionality with MongoDB",
            "Implementing syntax highlighting",
        ],
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio website with dashboard UI, dark mode, and smooth animations. Built to showcase projects and skills to potential employers.",
        status: "Completed",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
        github: "https://github.com/yourusername/portfolio",
        demo: "https://yourportfolio.vercel.app",
        learnings: [
            "Mastered Next.js App Router and server components",
            "Implemented design systems with Tailwind CSS",
            "Created responsive layouts with modern CSS",
        ],
    },
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto max-w-5xl px-6 py-16">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Projects</h1>
                    <p className="text-xl text-muted-foreground">
                        A lot of ideas, but some are still under construction!
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                        >
                            {/* Status Badge */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    {project.status === "In Progress" && (
                                        <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                            <Clock className="h-3 w-3" />
                                            In Progress
                                        </span>
                                    )}
                                    {project.status === "Planned" && (
                                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                            Planned
                                        </span>
                                    )}
                                    {project.status === "Completed" && (
                                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                                            Completed
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold">{project.title}</h3>

                            {/* Description */}
                            <p className="text-muted-foreground">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="rounded-md bg-secondary px-2 py-1 text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Key Learnings */}
                            <div className="space-y-2">
                                <p className="text-sm font-semibold">Key Learnings:</p>
                                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                    {project.learnings.map((learning, i) => (
                                        <li key={i}>{learning}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Links */}
                            <div className="flex gap-2 pt-2">
                                {project.github && (
                                    <Button variant="outline" size="sm" asChild>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="gap-2"
                                        >
                                            <Github className="h-4 w-4" />
                                            GitHub
                                        </a>
                                    </Button>
                                )}
                                {project.demo && (
                                    <Button variant="outline" size="sm" asChild>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="gap-2"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Live Demo
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex justify-between border-t border-border pt-8">
                <Button variant="ghost" asChild>
                    <Link href="/about" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        About Me
                    </Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="/skills" className="gap-2">
                        Skills & Tools
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
