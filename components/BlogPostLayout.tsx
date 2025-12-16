import Link from "next/link";

type RelatedPost = {
  title: string;
  slug: string;
};

type Props = {
  title: string;
  date: string;
  intro?: string;
  related?: RelatedPost[];
  children: React.ReactNode;
};


export default function BlogPostLayout({
  title,
  date,
  intro,
  related,
  children,
}: Props) {

  return (
    <main className="mx-auto max-w-3xl">
      {/* COVER / HEADER */}
      <section className="rounded-3xl bg-white px-8 pt-10 pb-8 shadow-sm">
        <Link href="/blog" className="text-sm brand-link">
          ← Terug naar blog
        </Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight">
          {title}
        </h1>

        <p className="mt-3 text-sm text-gray-500">{date}</p>

        {intro && (
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            {intro}
          </p>
        )}
      </section>

      {/* CONTENT */}
      <section className="mt-8 rounded-3xl bg-white px-8 py-10 shadow-sm">
        <article
  className="
    prose
    prose-lg
    max-w-none
    prose-headings:text-[#5B3A82]
    prose-p:leading-relaxed
    prose-p:tracking-normal
    prose-li:leading-relaxed
    prose-ul:pl-5
    prose-ul:space-y-2
  "
>

          {children}
        </article>
      </section>

{/* RELATED POSTS */}
{related && related.length > 0 && (
  <section className="mt-10">
    <h3 className="mb-4 text-lg font-semibold">
      Lees ook
    </h3>

    <div className="grid gap-4 sm:grid-cols-2">
      {related.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition"
        >
          <p className="text-sm font-medium text-[#5B3A82]">
            {post.title}
          </p>
        </Link>
      ))}
    </div>
  </section>
)}
      {/* FOOTER CTA */}
      <section className="mt-8 rounded-3xl bg-[#FFF6EC] px-8 py-6">
        <p className="text-sm text-gray-700">
          Wil je meer lezen over kraamzorg en de kraamtijd?
        </p>
        <Link
          href="/blog"
          className="mt-2 inline-block text-sm brand-link"
        >
          Bekijk alle artikelen →
        </Link>
      </section>
    </main>
  );
}
