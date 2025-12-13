import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      {/* HERO */}
      <h1 className="text-4xl font-bold leading-tight">
        Rust en overzicht in de kraamtijd
      </h1>

      <p className="mt-4 text-lg">
        De kraamtijd is een bijzondere periode waarin veel op je afkomt.
        Kraamgids helpt je betrouwbare, beschikbare kraamverzorgenden te vinden
        en biedt duidelijke informatie, zodat jij je kunt richten op wat echt
        belangrijk is.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/vinden"
          className="rounded-xl bg-black px-5 py-3 text-sm text-white"
        >
          Kraamzorg vinden
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border px-5 py-3 text-sm"
        >
          Lees de Kraamgids
        </Link>
      </div>

      {/* UITLEG */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">
          Waarom Kraamgids?
        </h2>

        <p>
          Goede kraamzorg geeft vertrouwen en rust. Toch is het vinden van een
          passende kraamverzorger niet altijd eenvoudig. Beschikbaarheid
          verschilt per regio en informatie is vaak versnipperd.
        </p>

        <p>
          Kraamgids brengt zelfstandige kraamverzorgenden en organisaties samen
          op één plek. Transparant, persoonlijk en met aandacht voor kwaliteit.
        </p>
      </section>

      {/* VOORDELEN */}
      <section className="mt-12 grid gap-6">
        <div className="rounded-2xl border p-5">
          <h3 className="font-semibold">Beschikbaarheid</h3>
          <p className="mt-2 text-sm text-gray-600">
            Inzicht in welke kraamverzorgenden (indicatief) ruimte hebben in jouw
            regio.
          </p>
        </div>

        <div className="rounded-2xl border p-5">
          <h3 className="font-semibold">Betrouwbaar</h3>
          <p className="mt-2 text-sm text-gray-600">
            Zorgvuldig geselecteerde kraamverzorgenden met aandacht voor zorg en
            kwaliteit.
          </p>
        </div>

        <div className="rounded-2xl border p-5">
          <h3 className="font-semibold">Persoonlijk</h3>
          <p className="mt-2 text-sm text-gray-600">
            Geen grote, onpersoonlijke lijsten, maar overzicht en duidelijke
            informatie.
          </p>
        </div>
      </section>

      {/* VOOR KRAAMVERZORGERS */}
      <section className="mt-16 rounded-2xl bg-gray-50 p-6">
        <h2 className="text-2xl font-semibold">
          Ben je kraamverzorger?
        </h2>
        <p className="mt-3">
          Kraamgids biedt jou een plek om zichtbaar te zijn voor ouders in jouw
          regio. Transparant, zonder marketinggedoe.
        </p>

        <Link
          href="/voor-kraamverzorgers"
          className="mt-4 inline-block rounded-xl border px-5 py-3 text-sm"
        >
          Meer informatie voor kraamverzorgers
        </Link>
      </section>
    </main>
  );
}
