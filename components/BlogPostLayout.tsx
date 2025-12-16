import Link from "next/link";

type Props = {
  title: string;
  date: string;
  children: React.ReactNode;
};

export default function BlogPostLayout({ title, date, children }: Props) {
  return (
    <main className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
      <Link href="/blog" className="text-sm brand-link">
        ← Terug naar blog
      </Link>

      <h1 className="mt-4 text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-gray-500">{date}</p>

      <article className="prose prose-lg prose-headings:text-[#5B3A82] mt-8 max-w-none">
        {children}
      </article>
    </main>
  );
}
