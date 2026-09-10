import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Link2 } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-black/[.08] bg-white px-6 py-4 dark:border-white/[.145] dark:bg-black sm:px-10">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
      >
        <span className="flex size-8 items-center justify-center rounded-md bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950">
          <Link2 className="size-4" />
        </span>
        <span>LinkShortnerProject</span>
      </Link>
      <nav className="flex items-center gap-3 text-sm font-medium">
        <ModeToggle />
        <Show when="signed-out">
          <SignInButton mode="modal">
            <Button variant="ghost" size="lg">
              Sign in
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size="lg">
              Sign up
            </Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </nav>
    </header>
  );
}
