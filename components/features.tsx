import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

type Props = unknown;

const Features = (props: Props) => {
  {
    /* Features Section */
  }
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Why LaunchFeed?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A better alternative to Product Hunt for indie builders who want to
            grow their audience from day one.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Launch Early - Wide Card */}
          <Card className="sm:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle>Launch Early, Launch Often</CardTitle>
              <CardDescription>
                Share your SaaS from day one. Don&apos;t wait until it&apos;s
                perfect. Build momentum as you build your product.
              </CardDescription>
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg p-2">
                <Image
                  src="/launches.png"
                  alt="Launch your product early"
                  fill
                  className="object-cover object-[0%_0%]"
                />
              </div>
            </CardHeader>
          </Card>

          {/* Feedback and Community Voting - Regular Card */}
          <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle>Feedback & Community Voting</CardTitle>
              <CardDescription>
                Get valuable feedback from real users. Let the community vote on
                features and help shape your product roadmap.
              </CardDescription>
              <div className="relative mt-4 aspect-square w-full overflow-hidden rounded-lg p-2">
                <Image
                  src="/community_feedback.png"
                  alt="Community feedback and voting"
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
          </Card>

          {/* Stay Updated - Regular Card */}
          <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>
                Follow your favorite builders and get notified when they ship
                new features, hit milestones, or share important updates.
              </CardDescription>
              <div className="relative mt-4 aspect-3/4 w-full overflow-hidden rounded-lg p-2">
                <Image
                  src="/be_updated.png"
                  alt="Stay updated with notifications"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </CardHeader>
          </Card>

          {/* Build in Public - Regular Card */}
          <Card className="sm:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle>Build in Public</CardTitle>
              <CardDescription>
                Share milestones, celebrate wins, and document your journey.
                Build trust and grow your audience as you build.
              </CardDescription>
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg p-2">
                <Image
                  src="/timeline.png"
                  alt="Share your milestones"
                  fill
                  className="object-cover object-[0%_40%]"
                />
              </div>
            </CardHeader>
          </Card>

          {/* Discover New Projects - Wide Card */}
          {/* <Card className="sm:col-span-2">
            <CardHeader>
              <CardTitle>Discover New Projects</CardTitle>
              <CardDescription>
                Find innovative products before they hit the mainstream. Get
                early access and influence product direction.
              </CardDescription>
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/discover_launches.png"
                  alt="Discover new launches"
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Features;
