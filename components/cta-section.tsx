import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CTASectionProps {
  onJoinClick: () => void;
}

export default function CTASection({ onJoinClick }: CTASectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Card className="overflow-hidden border-none bg-linear-to-r from-secondary to-secondary/80">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Don&apos;t Build in the Dark.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg">
              Join the waitlist for exclusive early access and launch your products to the right audience.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button size="lg" className="h-12" onClick={onJoinClick}>
                Get Early Access
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
