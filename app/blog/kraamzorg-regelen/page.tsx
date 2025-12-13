import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string; // bv. "13 december 2025"
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
  // Voeg later meer posts toe, bijv.:
  // {
  //   slug: "wat-doet-een-kraamverzorger",
  //   title: "Wat doet een kraamverzorger precies?",
  //   date: "20 december 2025",
  //   excerpt: "Een overzicht van taken, ondersteuning en wat je kunt verwachten in de kraamweek.",
  // },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-3 text-gray-700">
        Duidelijke informatie en praktische tips voor (aanstaande) ouders — met
        rust en overzicht in de kraamtijd.
      </p>

      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border p-5">
            <p className="text-sm text-gray-600">{post.date}</p>

            <h2 className="mt-2 text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="mt-2 text-sm text-gray-700">{post.excerpt}</p>

            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium underline"
              >
                Lees verder →
              </Link>
            </div>
          </article>
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