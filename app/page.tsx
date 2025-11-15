"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { RocketLaunchIcon } from "@phosphor-icons/react";
import { toast } from "sonner";
import Features from "@/components/features";
import Footer from "@/components/footer";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [xHandle, setXHandle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleJoinWaitlist = () => {
    setShowForm(true);
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.warning("Please enter your email");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const date = new Date();
    const inputValue: { [key: string]: string } = {
      email: email.trim(),
      website: website.trim() || "",
      xHandle: xHandle.trim() || "",
      createdAt: date.toLocaleString(),
    };

    const APP_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_APP_ID;
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;
    const formData = new FormData();

    Object.keys(inputValue).forEach((key) => {
      formData.append(key, inputValue[key]);
    });

    try {
      const res = await fetch(baseURL, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitStatus("success");
        // Reset form
        setEmail("");
        setWebsite("");
        setXHandle("");
        setTimeout(() => {
          setShowForm(false);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (e) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
      {/* Spacer for fixed navbar */}
      <div className="h-14"></div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-2">
              {/* <Rocket className="h-4 w-4 text-primary" /> */}
              <RocketLaunchIcon
                className="h-8 w-8 text-primary"
                weight="fill"
              />
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
            <Badge className="mb-4" variant="secondary">
              Where Builders Build in Public
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
              Build, Launch, and Grow
              <br />
              <span className="text-primary">in Public</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Get discovered as you build. Join a community of indie builders
              and founders shipping in public.
            </p>
            <div className="mt-10 flex flex-col items-center">
              <div className="w-full max-w-2xl" ref={formRef}>
                <div className="flex items-start gap-4">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setShowForm(true)}
                    className="h-12 flex-1 rounded-lg border border-zinc-200 bg-white px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-zinc-800 dark:bg-zinc-950"
                  />
                  <Button
                    size="lg"
                    className={`h-12 shrink-0 transition-colors ${
                      submitStatus === "success"
                        ? "bg-green-600 hover:bg-green-700"
                        : ""
                    }`}
                    onClick={showForm ? handleSubmit : handleJoinWaitlist}
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : submitStatus === "success"
                      ? "Success!"
                      : showForm
                      ? "Submit"
                      : "Join Waitlist"}
                  </Button>
                </div>

                {/* Additional form fields */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showForm ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <input
                      type="url"
                      placeholder="Website (optional)"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-zinc-800 dark:bg-zinc-950"
                    />
                    <input
                      type="text"
                      placeholder="X handle (optional, e.g. @nsoybean)"
                      value={xHandle}
                      onChange={(e) => setXHandle(e.target.value)}
                      className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-zinc-800 dark:bg-zinc-950"
                    />
                    {submitStatus === "error" && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
                100+ builders have already joined
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-bold">100+</div>
              <div className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                On Waitlist
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">12+</div>
              <div className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                Early Builders
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">45+</div>
              <div className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                Projects Shared
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

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
                {/* commented out repeated input form */}
                {/* <input
                  type="email"
                  placeholder="name@email.com"
                  className="h-12 w-full max-w-sm rounded-lg border-0 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 bg-white"
                /> */}
                <Button size="lg" className="h-12" onClick={scrollToHero}>
                  Join Waitlist
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
