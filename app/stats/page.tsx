import Link from "next/link";
import { ArrowLeft, Eye, Heart, GitBranch, Users, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StatsPage() {
    return (
        <div className="container mx-auto max-w-5xl px-6 py-16">
            <div className="space-y-12">
                {/* Page Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Stats</h1>
                    <p className="text-xl text-muted-foreground">
                        Numbers don't lie, but they sure know how to impress!
                    </p>
                </div>

                {/* About This Portfolio Section */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold">About this portfolio</h2>
                        <p className="text-muted-foreground">
                            Track engagement and see how this portfolio is performing.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Total Views Card */}
                        <div className="rounded-xl border border-border bg-card p-8 text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="rounded-full bg-primary/10 p-4">
                                    <Eye className="h-8 w-8 text-primary" />
                                </div>
                            </div>
                            <div className="text-5xl font-bold text-primary">1,234</div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Unique page visits since Jan 2026
                            </p>
                        </div>

                        {/* Love This Portfolio Card */}
                        <div className="rounded-xl border border-border bg-card p-8 text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="rounded-full bg-pink-500/10 p-4">
                                    <Heart className="h-8 w-8 text-pink-500" />
                                </div>
                            </div>
                            <div className="text-5xl font-bold text-pink-500">42</div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                People who loved this portfolio
                            </p>
                            <Button className="mt-4 gap-2 rounded-full" size="lg">
                                <Heart className="h-4 w-4" />
                                Love this portfolio
                            </Button>
                        </div>
                    </div>
                </div>

                {/* GitHub Stats Section */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold">GitHub Stats</h2>
                        <p className="text-muted-foreground">
                            My coding activity and contributions on GitHub.
                        </p>
                    </div>

                    {/* GitHub Contribution Graph */}
                    <div className="rounded-xl border border-border bg-card p-6">
                        <h3 className="mb-4 text-lg font-semibold">Contribution Activity</h3>
                        <div className="flex items-center justify-center rounded-lg bg-muted p-8">
                            <p className="text-sm text-muted-foreground">
                                GitHub contribution graph will appear here
                                <br />
                                <span className="text-xs">
                                    (Requires GitHub API integration)
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* GitHub Profile Stats Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Hireable */}
                        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-green-500/10 p-2">
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Hireable</p>
                                    <p className="text-xl font-semibold text-green-500">Yes</p>
                                </div>
                            </div>
                        </div>

                        {/* Public Repos */}
                        <div className="rounded-xl border border-border bg-card p-6">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                    <GitBranch className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Public Repos</p>
                                    <p className="text-xl font-semibold">15</p>
                                </div>
                            </div>
                        </div>

                        {/* Followers */}
                        <div className="rounded-xl border border-border bg-card p-6">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Followers</p>
                                    <p className="text-xl font-semibold">42</p>
                                </div>
                            </div>
                        </div>

                        {/* Following */}
                        <div className="rounded-xl border border-border bg-card p-6">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Following</p>
                                    <p className="text-xl font-semibold">28</p>
                                </div>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="rounded-xl border border-border bg-card p-6">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                    <Building className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Company</p>
                                    <p className="text-xl font-semibold">Student</p>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="rounded-xl border border-border bg-card p-6">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="text-xl font-semibold">Your City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Note about GitHub Stats */}
                    <div className="rounded-lg border border-border/50 bg-muted/50 p-4">
                        <p className="text-sm text-muted-foreground">
                            <span className="font-semibold">Note:</span> These are placeholder values. To show real
                            GitHub stats, you'll need to integrate the GitHub API. Check the walkthrough for
                            instructions on adding live data.
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex justify-between border-t border-border pt-8">
                <Button variant="ghost" asChild>
                    <Link href="/contact" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Contact
                    </Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="/" className="gap-2">
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}
