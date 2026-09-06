import { Show, SignUpButton } from "@clerk/nextjs";
import { BarChart3, FolderKanban, Link2, ShieldCheck, Sparkles, Zap } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Link2,
    title: "Custom short links",
    description:
      "Turn long, unwieldy URLs into short, branded links you can share anywhere.",
  },
  {
    icon: BarChart3,
    title: "Click analytics",
    description:
      "See how every link performs with real-time click counts and traffic insights.",
  },
  {
    icon: Zap,
    title: "Instant redirects",
    description:
      "Links resolve in milliseconds, so visitors never notice they took a detour.",
  },
  {
    icon: FolderKanban,
    title: "Centralized dashboard",
    description:
      "Manage every link you've created from a single, organized dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description:
      "Every account is protected by Clerk authentication, keeping your links safe.",
  },
  {
    icon: Sparkles,
    title: "Built for simplicity",
    description:
      "No clutter, no setup steps — sign up and start shortening in seconds.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <section className="flex flex-col items-center px-6 py-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Simple sharing, made shorter
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
            Your links, without the long story.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Create memorable short links and keep every destination close at hand.
          </p>
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button size="lg" className="mt-10">
                Get started for free
              </Button>
            </SignUpButton>
          </Show>
        </section>

        <section className="border-t border-black/[.08] bg-white px-6 py-24 dark:border-white/[.145] dark:bg-black sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
                Everything you need to share smarter
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                A focused set of tools for creating, tracking, and managing your short links.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <Card key={title}>
                  <CardHeader>
                    <Icon className="mb-2 size-6 text-zinc-950 dark:text-zinc-50" />
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
