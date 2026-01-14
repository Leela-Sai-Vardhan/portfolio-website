import Link from "next/link";
import { ArrowRight, ArrowLeft, Trophy, Code, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
    {
        type: "work",
        title: "Open Source Developer",
        organization: "Hacktoberfest",
        period: "Oct 2025 - Present",
        current: true,
        description:
            "Currently contributing to various open source projects, working on web development projects and collaborating with the global developer community.",
        achievements: [
            "Merged 5+ pull requests across different repositories",
            "Fixed bugs and improved documentation",
            "Collaborated with maintainers on feature implementations",
        ],
    },
    {
        type: "hackathon",
        title: "Smart India Hackathon 2025",
        organization: "Government of India",
        period: "Mar 2025",
        current: false,
        description:
            "Participated in India's biggest hackathon, developing a solution for real-world problem statements.",
        achievements: [
            "Built a full-stack web application in 36 hours",
            "Collaborated with a team of 6 developers",
            "Presented solution to industry judges",
        ],
    },
    {
        type: "hackathon",
        title: "MLH Local Hack Day",
        organization: "Major League Hacking",
        period: "Dec 2024",
        current: false,
        description:
            "24-hour hackathon focused on building innovative projects with modern web technologies.",
        achievements: [
            "Won Best Beginner Hack award",
            "Built a real-time collaboration tool",
            "Learned new technologies under time pressure",
        ],
    },
    {
        type: "certification",
        title: "Full-Stack Web Development",
        organization: "Online Course Platform",
        period: "2024",
        current: false,
        description:
            "Comprehensive course covering modern web development with React, Node.js, and databases.",
        achievements: [
            "Completed 50+ hours of coursework",
            "Built 10+ projects from scratch",
            "Earned certification with distinction",
        ],
    },
];

export default function ExperiencePage() {
    return (
        <div className="container mx-auto max-w-4xl px-6 py-16">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Experience</h1>
                    <p className="text-xl text-muted-foreground">
                        You need it to get the job, but the job's what gives it!
                    </p>
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed">
                    Throughout my journey as a developer, I have had the opportunity to work with cutting-edge
                    technologies while also mastering the fine art of debugging at 2 AM. From building dynamic web
                    applications to deciphering cryptic error messages, my experience has been a mix of structured
                    learning and spontaneous problem-solving. Each project and internship has sharpened my ability to
                    write clean code, collaborate effectively, and most importantly—fix bugs before they fix me.
                </p>

                {/* Timeline */}
                <div className="relative space-y-8 border-l-2 border-border pl-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary">
                                {exp.type === "hackathon" && <Trophy className="h-4 w-4 text-primary-foreground" />}
                                {exp.type === "work" && <Code className="h-4 w-4 text-primary-foreground" />}
                                {exp.type === "certification" && <Award className="h-4 w-4 text-primary-foreground" />}
                            </div>

                            {/* Content */}
                            <div className="space-y-3 rounded-lg border border-border bg-card p-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                                        <p className="text-sm text-muted-foreground">{exp.organization}</p>
                                    </div>
                                    {exp.current && (
                                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                            Current
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm text-muted-foreground">{exp.period}</p>

                                <p className="leading-relaxed">{exp.description}</p>

                                <div className="space-y-2">
                                    <p className="text-sm font-semibold">Key Achievements:</p>
                                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex justify-between border-t border-border pt-8">
                <Button variant="ghost" asChild>
                    <Link href="/skills" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Skills & Tools
                    </Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="/contact" className="gap-2">
                        Contact
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
