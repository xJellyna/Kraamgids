"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

function normalizePostcode(value: string) {
  return value.toUpperCase().replace(/\s+/g, "").trim();
}

function isValidDutchPostcode(value: string) {
  // NL postcode: 1234AB (spatie optioneel, wij normaliseren)
  return /^[1-9][0-9]{3}[A-Z]{2}$/.test(value);
}

export default function HomePage() {
  const router = useRouter();

  const [postcode, setPostcode] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [touched, setTouched] = useState(false);

  const normalized = useMemo(() => normalizePostcode(postcode), [postcode]);
  const valid = useMemo(() => isValidDutchPostcode(normalized), [normalized]);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);

    if (!valid) return;

    const params = new URLSearchParams();
    params.set("postcode", normalized);
    if (dueDate) params.set("datum", dueDate);

    router.push(`/vinden?${params.toString()}`);
  }

  return (
    <main className="mx-auto max-w-5xl">
      {/* HERO CARD */}
      <section className="rounded-3xl bg-white p-10 shadow-sm">
        <p className="text-sm font-medium" style={{ color: "var(--brand)" }}>
          Beschikbaar • Betrouwbaar • Kwaliteit
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight">
          Vind kraamzorg die bij jullie past
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-700">
          Kraamgids helpt (aanstaande) ouders om betrouwbare kraamverzorgenden en
          organisaties in één overzicht te vinden — met rust, overzicht en vertrouwen.
        </p>

        {/* SEARCH BLOCK */}
        <form
          onSubmit={onSearch}
          className="mt-8 rounded-3xl bg-[#FFF6EC] p-6"
        >
          <h2 className="text-lg font-semibold">Vind kraamzorg in jouw regio</h2>
          <p className="mt-1 text-sm text-gray-700">
            Vul je postcode in. (Optioneel: je uitgerekende datum voor betere matching later.)
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Postcode
              </label>
              <input
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="1234 AB"
                className="mt-1 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
                inputMode="text"
                autoComplete="postal-code"
              />
              {touched && !valid && postcode.length > 0 && (
                <p className="mt-2 text-xs text-red-600">
                  Vul een geldige postcode in (bijv. 1234AB).
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Uitgerekende datum (optioneel)
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="mt-1 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              />
            </div>

            <div className="sm:col-span-1 flex items-end">
              <button
                type="submit"
                className="brand-button w-full"
                disabled={touched && !valid}
                style={{ opacity: touched && !valid ? 0.7 : 1 }}
              >
                Zoek kraamzorg
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Tip: je kunt ook later verfijnen op voorkeuren (bijv. zelfstandig/organisatie).
          </p>
        </form>

        {/* Secondary CTA */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/blog" className="text-sm brand-link">
            Lees de blog →
          </Link>
        </div>
      </section>

      {/* 3 BENEFITS */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Beschikbaar</h2>
          <p className="mt-2 text-sm text-gray-700">
            Kraamzorg binnen handbereik, zonder stress of eindeloos zoeken.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Betrouwbaar</h2>
          <p className="mt-2 text-sm text-gray-700">
            Duidelijke en zorgvuldige informatie, zodat jullie met een gerust hart een keuze maken.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Betrokken</h2>
          <p className="mt-2 text-sm text-gray-700">
            Met aandacht voor de kleine én grote momenten in de kraamtijd.
          </p>
        </div>
      </section>
    </main>
  );
}
