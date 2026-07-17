import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <section className="max-w-xl space-y-6 text-center">
        <p className="text-sm text-muted-foreground">Zero Five Docs</p>

        <h1 className="text-xl font-bold tracking-tight">
          Engineering handbook for my lab, apps, and infrastructure.
        </h1>

        <p className="text-md text-muted-foreground">
          Notes, architecture decisions, setup guides, services, experiments,
          and public documentation for the Zero Five ecosystem.
        </p>

        <div className="flex justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-xl bg-primary px-5 py-3 text-primary-foreground"
          >
            Open docs
          </Link>

          <Link
            href="/docs/homelab"
            className="rounded-xl border px-5 py-3"
          >
            Homelab
          </Link>
        </div>
      </section>
    </main>
  );
}