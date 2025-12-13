import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-4">Welkom op de blog van Kraamgids.</p>

      <div className="mt-6">
        <Link className="underline" href="/blog/kraamzorg-regelen">
          Kraamzorg regelen: wanneer begin je en waar let je op?
        </Link>
      </div>
    </main>
  );
}
