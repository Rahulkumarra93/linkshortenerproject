import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Simple sharing, made shorter
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
            Your links, without the long story.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Create memorable short links and keep every destination close at hand.
          </p>
        </div>
      </main>
    </div>
  );
}
