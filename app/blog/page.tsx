import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    slug: "kraamzorg-regelen",
    title: "Kraamzorg regelen: wanneer begin je en waar let je op?",
    date: "13 december 2025",
    excerpt:
      "Wanneer regel je kraamzorg, waar let je op bij je keuze en wat kun je doen als het vol zit in jouw regio?",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-3 text-gray-700">
        Duidelijke informatie en praktische tips voor (aanstaande) ouders — met
        rust en overzicht in de kraamtijd.
      </p>

      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-3xl bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-600">{post.date}</p>

            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>

            <p className="mt-2 text-sm text-gray-700">{post.excerpt}</p>

            <p className="mt-4 text-sm font-medium underline">Lees verder →</p>
          </Link>
        ))}
      </div>

      <section className="mt-12 rounded-2xl bg-gray-50 p-6">
        <h2 className="text-xl font-semibold">Mis je een onderwerp?</h2>
        <p className="mt-2 text-sm text-gray-700">
          Heb je een vraag over kraamzorg of de kraamtijd? Laat het weten — dan
          schrijven we er graag over.
        </p>
        <Link href="/contact" className="mt-4 inline-block text-sm underline">
          Neem contact op
        </Link>
      </section>
    </main>
  );
}
