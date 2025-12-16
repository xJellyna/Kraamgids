"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
};

const posts: Post[] = [
  {
    slug: "kraamzorg-regelen",
    title: "Kraamzorg regelen: wanneer begin je en waar let je op?",
    date: "13 december 2025",
    excerpt:
      "Wanneer regel je kraamzorg, waar let je op bij je keuze en wat kun je doen als het vol zit in jouw regio?",
    categories: ["Regelen", "Voorbereiding"],
  },
  {
    slug: "wat-doet-een-kraamverzorger",
    title:
      "Wat doet een kraamverzorger precies? (en wat kun je verwachten in de kraamweek)",
    date: "14 december 2025",
    excerpt:
      "Een helder overzicht van wat kraamzorg inhoudt: zorg, begeleiding, voeding en ondersteuning in de kraamweek.",
    categories: ["Kraamweek", "Zorg"],
  },
];

export default function BlogOverviewPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Alles");

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return ["Alles", ...Array.from(set)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Alles") return posts;
    return posts.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <main className="mx-auto max-w-5xl">
      {/* INTRO */}
      <section className="mb-6 rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-3 max-w-2xl text-gray-700">
          Duidelijke informatie en praktische tips voor (aanstaande) ouders.
          Met rust, overzicht en aandacht voor kwaliteit in de kraamtijd.
        </p>

        {/* FILTERS */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition shadow-sm",
                  isActive
                    ? "text-white"
                    : "hover:bg-white",
                ].join(" ")}
                style={{
                  backgroundColor: isActive
                    ? "var(--brand)"
                    : "rgba(255, 246, 236, 0.9)",
                  color: isActive ? "#fff" : "var(--brand)",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="grid gap-6 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            {/* categories on card */}
            <div className="mb-2 flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(255, 246, 236, 0.9)",
                    color: "var(--brand)",
                  }}
                >
                  {category}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500">{post.date}</p>

            <h2 className="mt-2 text-xl font-semibold leading-snug group-hover:underline">
              {post.title}
            </h2>

            <p className="mt-3 text-sm text-gray-700">{post.excerpt}</p>

            <p
              className="mt-4 text-sm font-medium"
              style={{ color: "var(--brand)" }}
            >
              Lees verder →
            </p>
          </Link>
        ))}
      </section>

      {/* EMPTY STATE */}
      {filteredPosts.length === 0 && (
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-gray-700">
            Geen artikelen gevonden voor <strong>{activeCategory}</strong>.
          </p>
        </section>
      )}
    </main>
  );
}



