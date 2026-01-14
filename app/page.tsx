import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-16">
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-8rem)] flex-col justify-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Leela Sai Vardhan Dhavala
            </span>
          </h1>
          <h2 className="text-2xl font-semibold text-muted-foreground lg:text-3xl">
            Full-Stack Developer Student
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed">
            Passionate about building scalable web applications with modern technologies.
            Currently seeking <span className="font-semibold text-foreground">full-stack internship opportunities</span> to
            contribute to impactful projects and grow as a developer.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/projects">
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-6 pt-8 md:grid-cols-4">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-primary">5+</p>
            <p className="text-sm text-muted-foreground">Projects Built</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-primary">3+</p>
            <p className="text-sm text-muted-foreground">Hackathons</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-primary">Open</p>
            <p className="text-sm text-muted-foreground">To Opportunities</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 pt-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/Leela-Sai-Vardhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/leela-sai-vardhan-dhavala-284024339/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="mailto:leelasaivardhandhavala@gmail.com"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Next Section Navigation */}
      <div className="flex justify-between border-t border-border pt-8">
        <div />
        <Button variant="ghost" asChild>
          <Link href="/about" className="gap-2">
            About Me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
