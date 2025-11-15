import React from "react";
import { Rocket, Users, TrendingUp, Bell, Star, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

type Props = unknown;

const Features = (props: Props) => {
  {
    /* Features Section */
  }
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Why LaunchFeed?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A better alternative to Product Hunt for indie builders who want to
            grow their audience from day one.
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
                Connect with other founders and builders. Follow their journey,
                learn from their updates, and build together.
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
                Hit your first sale? Reached 100 users? Share your wins and get
                support from the community.
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
  );
};

export default Features;
