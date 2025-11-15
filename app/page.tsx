"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, TrendingUp, Bell, Star, Zap } from "lucide-react";

export default function Home() {
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
      {/* Spacer for fixed navbar */}
      <div className="h-14"></div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-md font-semibold">LaunchFeed</span>
            </div>
            <div className="flex items-center gap-4">
              {/* <Button variant="ghost" size="sm">
                Projects
              </Button>
              <Button variant="ghost" size="sm">
                Updates
              </Button>
              <Button variant="ghost" size="sm">
                About
              </Button> */}

              <Button size="sm" onClick={scrollToHero} className="h-8 text-sm">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Badge className="mb-6" variant="secondary">
              <Rocket className="mr-1 h-3 w-3" />
              Where Builders Build in Public
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
              Build, Launch, and Grow
              <br />
              <span className="text-primary">in Public</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Get discovered as you build. Join a community of indie builders
              and founders shipping in public. Follow progress, celebrate
              milestones, and discover products as they&apos;re being built.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <input
                type="email"
                placeholder="name@email.com"
                className="h-12 w-full max-w-sm rounded-lg border border-zinc-200 bg-white px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-zinc-800 dark:bg-zinc-950"
              />
              <Button size="lg" className="h-12">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-bold">30+</div>
              <div className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                Builders
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">850+</div>
              <div className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                Products
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">12K+</div>
              <div className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                Updates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Why LaunchFeed?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              A better alternative to Product Hunt for indie builders who want
              to grow their audience from day one.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Launch Early, Launch Often</CardTitle>
                <CardDescription>
                  Share your SaaS from day one. Don&apos;t wait until it&apos;s
                  perfect. Build momentum as you build your product.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Follow Indie Builders</CardTitle>
                <CardDescription>
                  Connect with other founders and builders. Follow their
                  journey, learn from their updates, and build together.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Showcase Progress</CardTitle>
                <CardDescription>
                  Post regular updates about features, milestones, revenue, and
                  more. Let your audience watch your product evolve.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Get notified when builders you follow ship new features, hit
                  milestones, or share important updates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Celebrate Milestones</CardTitle>
                <CardDescription>
                  Hit your first sale? Reached 100 users? Share your wins and
                  get support from the community.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Discover Early</CardTitle>
                <CardDescription>
                  Find innovative products before they hit the mainstream. Get
                  early access and influence product direction.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-none bg-linear-to-r from-secondary to-secondary/80">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to Build in Public?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg">
                Join the waitlist and be among the first to showcase your
                journey, connect with other builders, and grow your audience.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="h-12 w-full max-w-sm rounded-lg border-0 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 bg-white"
                />
                <Button size="lg" className="h-12">
                  Join Waitlist
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-black">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              <span className="font-semibold">LaunchFeed</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2025 LaunchFeed. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
