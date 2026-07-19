import Link from "next/link";
import { Logo } from "@/components/shared/logo";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="flex h-16 items-center justify-between border-b border-border px-8">
        <Logo />
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="max-w-3xl font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          The Autonomous Biological Farming Operating System
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          BioSphere AI guides your agricultural decisions with explainable intelligence, ensuring maximum yield and biological readiness.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/register"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Start Your Mission
          </Link>
          <Link href="/login" className="text-sm font-semibold leading-6 text-foreground">
            Sign in to your farm <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
