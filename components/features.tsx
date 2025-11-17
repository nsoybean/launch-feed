import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

type Props = unknown;

/* Features Section */
const Features = (props: Props) => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Why LaunchFeed?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Everything you need to build, launch, and grow your audience from
            day one.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1. Launch Early - Squarish Card */}
          <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle> 🚀 Launch early</CardTitle>
              <CardDescription>
                As long you have a website, launch it, gather feedback, and
                build buzz before your official release
              </CardDescription>
              <div className="relative mt-4 h-72 w-full overflow-hidden rounded-lg p-2">
                <Image
                  src="/launch_detail.png"
                  alt="Example launch of a saas"
                  fill
                  className="object-contain"
                />
              </div>
            </CardHeader>
          </Card>

          {/* 2. Beyond Launch Day - Landscape Card (2 cols) */}
          <Card className="sm:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle>🎯 Beyond launch day</CardTitle>
              <CardDescription>
                Share milestones and updates. Keep your audience engaged as you
                build and grow
              </CardDescription>
              <div className="relative mt-4 h-72 w-full overflow-hidden rounded-lg p-2">
                <Image
                  src="/timeline.png"
                  alt="Timeline of updates"
                  fill
                  className="object-cover object-top-left"
                />
              </div>
            </CardHeader>
          </Card>

          {/* 3. Get Highlighted for Shipping - Landscape Card (2 cols) */}
          <Card className="sm:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle> ⭐ Get Highlighted for Shipping</CardTitle>
              <CardDescription>
                Ship relentlessly, get rewarded. Builders with regular updates
                get featured in a special section - your activity streak shows
                you&apos;re serious.
              </CardDescription>
              <div className="relative mt-4 h-80 w-full overflow-hidden rounded-lg p-2">
                <Image
                  src="/shipping_consistency.png"
                  alt="Best consistency section"
                  fill
                  className="object-cover object-[100%_120%]"
                />
              </div>
            </CardHeader>
          </Card>

          {/* 4. Follow Your Favorite Builders - Portrait Card */}
          <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle> 👥 Follow Your Favorite Builders</CardTitle>
              <CardDescription>
                Discover and follow indie makers. Get notified when they ship
                updates, launch new projects, or hit milestones
              </CardDescription>
              <div className="relative mt-4 h-80 w-[65%] overflow-hidden rounded-lg p-2 flex mx-auto">
                <Image
                  src="/follow_builder.png"
                  alt="Suggested builder"
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
          </Card>

          {/* 5. Feature Request Board - Portrait Card */}
          <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle> 📋 Feature Request Board</CardTitle>
              <CardDescription>
                Show transparency in building + Community-submitted ideas with
                vote counts.
              </CardDescription>
              <div className="relative mt-4 h-80 w-full overflow-hidden rounded-lg p-2">
                <Image
                  src="/feature_request.png"
                  alt="Feature request board"
                  fill
                  className="object-cover object-[0%_30%]"
                />
              </div>
            </CardHeader>
          </Card>

          {/* 6. Feedback & Community Voting - Squarish Card (2 cols) */}
          <Card className="sm:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle> 💬 Feedback & Community Voting</CardTitle>
              <CardDescription>
                Get valuable feedback from real users. Let the community vote on
                features and help shape your product roadmap.
              </CardDescription>
              <div className="relative mt-4 h-80 w-full overflow-hidden rounded-lg p-2">
                <Image
                  src="/community_feedback.png"
                  alt="Users leaving comments and feedback"
                  fill
                  className="object-contain"
                />
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
