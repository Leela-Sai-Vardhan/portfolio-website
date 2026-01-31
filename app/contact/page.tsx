import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { SiReddit } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="container mx-auto max-w-3xl px-6 py-16">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <p className="text-xl text-muted-foreground">
                        Let's connect and build something amazing together!
                    </p>
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed">
                    I'm always open to discussing new opportunities, collaborations, or just chatting about
                    technology. Whether you have a project in mind, want to connect, or just want to say hi,
                    feel free to reach out through any of the channels below.
                </p>

                {/* Contact Cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                    {/* Email */}
                    <a
                        href="mailto:leelasaivardhandhavala@gmail.com"
                        className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                    >
                        <div className="rounded-lg bg-primary/10 p-3">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-semibold">Email</p>
                            <p className="text-sm text-muted-foreground">leelasaivardhandhavala@gmail.com</p>
                        </div>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Leela-Sai-Vardhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                    >
                        <div className="rounded-lg bg-primary/10 p-3">
                            <Github className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-semibold">GitHub</p>
                            <p className="text-sm text-muted-foreground">@Leela-Sai-Vardhan</p>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/leela-sai-vardhan-dhavala/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                    >
                        <div className="rounded-lg bg-primary/10 p-3">
                            <Linkedin className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-semibold">LinkedIn</p>
                            <p className="text-sm text-muted-foreground">Leela Sai Vardhan Dhavala</p>
                        </div>
                    </a>

                    {/* Reddit */}
                    <a
                        href="https://www.reddit.com/user/Leela_sai_vardhan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                    >
                        <div className="rounded-lg bg-primary/10 p-3">
                            <SiReddit className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-semibold">Reddit</p>
                            <p className="text-sm text-muted-foreground">u/Leela_sai_vardhan</p>
                        </div>
                    </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-6">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm text-muted-foreground">Kanuru Vijayawada</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="rounded-lg border border-primary/50 bg-primary/5 p-8 text-center">
                    <h3 className="mb-2 text-xl font-semibold">Open to Opportunities</h3>
                    <p className="mb-4 text-muted-foreground">
                        I'm currently seeking full-stack internship opportunities. If you have an exciting project
                        or role, let's talk!
                    </p>
                    <Button asChild size="lg">
                        <a href="mailto:leelasaivardhandhavala@gmail.com">Get in Touch</a>
                    </Button>
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex justify-between border-t border-border pt-8">
                <Button variant="ghost" asChild>
                    <Link href="/experience" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Experience
                    </Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="/stats" className="gap-2">
                        Stats
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
