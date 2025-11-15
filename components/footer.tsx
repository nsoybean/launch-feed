import { Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="font-semibold">LaunchFeed</span>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <a
              href="https://x.com/nsoybean"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-primary transition-colors dark:text-zinc-400 dark:hover:text-primary"
            >
              Built by @nsoybean
            </a>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2025 LaunchFeed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
