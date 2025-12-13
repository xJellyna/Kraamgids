import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-4xl font-bold">Welkom bij Kraamgids</h1>

      <p className="mt-4 text-lg">
        Een rustige kraamtijd begint met goede zorg. Bij Kraamgids vind je
        betrouwbare, beschikbare kraamverzorgenden – met aandacht voor kwaliteit
        en vertrouwen.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">
          Binnenkort: kraamzorg vinden op postcode
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          We bouwen Kraamgids stap voor stap. Lees mee op de blog of meld je aan
          als kraamverzorger.
        </p>

        <div className="mt-4 flex gap-3">
          <Link href="/vinden" className="rounded-xl border px-4 py-2 text-sm">
            Kraamzorg vinden
          </Link>
          <Link
            href="/voor-kraamverzorgers"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white"
          >
            Voor kraamverzorgers
          </Link>
        </div>
      </div>
    </main>
  );
}
