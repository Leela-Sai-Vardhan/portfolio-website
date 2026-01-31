'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, Eye } from "lucide-react";
import { ArrowRight, ArrowLeft, Github, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Earrupai - AI-Powered Mobile App",
        description: "An innovative mobile application published on Google Play Store. Features AI-powered functionality to enhance user experience and solve real-world problems with intelligent automation.",
        status: "Completed",
        tech: ["Flutter", "Dart", "Firebase", "AI/ML", "Android"],
        github: null,
        demo: "https://play.google.com/store/apps/details?id=com.earrupai",
        learnings: [
            "Built production-ready mobile app with Flutter",
            "Integrated AI/ML features for intelligent functionality",
            "Published and maintained app on Google Play Store",
        ],
    },
    {
        title: "Trinetra - Mobile Application",
        description: "A feature-rich mobile application available on Google Play Store. Designed to provide seamless user experience with modern UI/UX principles and robust functionality.",
        status: "Completed",
        tech: ["Flutter", "Dart", "Firebase", "Android", "Material Design"],
        github: null,
        demo: "https://play.google.com/store/apps/details?id=com.trinetra",
        learnings: [
            "Developed cross-platform mobile app with Flutter",
            "Implemented Material Design principles",
            "Managed app deployment and updates on Play Store",
        ],
    },
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
    const [visitedCards, setVisitedCards] = useState<Set<number>>(new Set());
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTech, setSelectedTech] = useState<string[]>([]);
    const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
    const [projectViews, setProjectViews] = useState<Record<number, number>>({});

    const handleCardHover = (index: number) => {
        setVisitedCards(prev => new Set(prev).add(index));
    };

    const handleCardClick = async (index: number) => {
        try {
            const response = await fetch(`/api/projects/${index}/views`, {
                method: 'POST',
            });
            const data = await response.json();
            if (data.views) {
                setProjectViews(prev => ({ ...prev, [index]: data.views }));
            }
        } catch (error) {
            console.error('Error incrementing view count:', error);
        }
    };

    // Fetch view counts on mount
    useEffect(() => {
        const fetchViewCounts = async () => {
            const viewsData: Record<number, number> = {};
            for (let i = 0; i < projects.length; i++) {
                try {
                    const response = await fetch(`/api/projects/${i}/views`);
                    const data = await response.json();
                    viewsData[i] = data.views || 0;
                } catch (error) {
                    console.error(`Error fetching views for project ${i}:`, error);
                    viewsData[i] = 0;
                }
            }
            setProjectViews(viewsData);
        };
        fetchViewCounts();
    }, []);

    // Get all unique tech stacks
    const allTech = Array.from(new Set(projects.flatMap(p => p.tech)));
    const allStatuses = Array.from(new Set(projects.map(p => p.status)));

    // Filter projects
    const filteredProjects = projects.filter(project => {
        const matchesSearch = searchQuery === "" ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesTech = selectedTech.length === 0 ||
            selectedTech.some(tech => project.tech.includes(tech));

        const matchesStatus = selectedStatus.length === 0 ||
            selectedStatus.includes(project.status);

        return matchesSearch && matchesTech && matchesStatus;
    });

    const toggleTech = (tech: string) => {
        setSelectedTech(prev =>
            prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
        );
    };

    const toggleStatus = (status: string) => {
        setSelectedStatus(prev =>
            prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
        );
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedTech([]);
        setSelectedStatus([]);
    };

    const hasActiveFilters = searchQuery !== "" || selectedTech.length > 0 || selectedStatus.length > 0;

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

                {/* Search and Filters */}
                <div className="space-y-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    {/* Filter Chips */}
                    <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-muted-foreground">Tech Stack:</span>
                        {allTech.map(tech => (
                            <Badge
                                key={tech}
                                variant={selectedTech.includes(tech) ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => toggleTech(tech)}
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        {allStatuses.map(status => (
                            <Badge
                                key={status}
                                variant={selectedStatus.includes(status) ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => toggleStatus(status)}
                            >
                                {status}
                            </Badge>
                        ))}
                    </div>

                    {/* Clear Filters */}
                    {hasActiveFilters && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearFilters}
                            className="gap-2"
                        >
                            <X className="h-4 w-4" />
                            Clear Filters
                        </Button>
                    )}

                    {/* Results Count */}
                    <p className="text-sm text-muted-foreground">
                        Showing {filteredProjects.length} of {projects.length} projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {filteredProjects.length === 0 ? (
                        <div className="col-span-2 text-center py-12">
                            <p className="text-muted-foreground">No projects found matching your filters.</p>
                        </div>
                    ) : (
                        filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => handleCardHover(index)}
                                onClick={() => handleCardClick(index)}
                                className={`group relative flex flex-col gap-4 rounded-lg glass-card glass-card-hover p-6 cursor-pointer ${visitedCards.has(index)
                                    ? ''
                                    : index % 2 === 0
                                        ? 'card-tilt-left'
                                        : 'card-tilt-right'
                                    }`}
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

                                {/* View Count */}
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Eye className="h-4 w-4" />
                                    <span>{projectViews[index] || 0} views</span>
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
                        ))
                    )}
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
