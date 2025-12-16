"use client";
import Link from "next/link";

export default function VoorKraamverzorgersPage() {
  return (
    <main className="mx-auto max-w-5xl">
      {/* HERO */}
      <section className="rounded-3xl bg-white p-10 shadow-sm">
        <p className="text-sm font-medium" style={{ color: "var(--brand)" }}>
          Voor zelfstandigen én organisaties
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight">
          Word zichtbaar voor ouders in jouw regio
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-700">
          Kraamgids is een betrouwbaar, overzichtelijk platform waar (aanstaande) ouders
          betrouwbare kraamzorg kunnen vinden. Geen ruis — wél de juiste match.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#aanmelden" className="brand-button">
            Aanmelden
          </a>
          <Link href="/vinden" className="text-sm brand-link">
            Bekijk hoe ouders zoeken →
          </Link>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Meer zichtbaarheid</h2>
          <p className="mt-2 text-sm text-gray-700">
            Ouders zoeken op regio en voorkeuren. Jij wordt gevonden op basis van
            wat je aanbiedt — helder en eerlijk.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Rustig & betrouwbaar</h2>
          <p className="mt-2 text-sm text-gray-700">
            Geen schreeuwerige advertenties. Kraamgids is gemaakt voor vertrouwen
            en kwaliteit — precies wat ouders zoeken.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Eenvoudig beheer</h2>
          <p className="mt-2 text-sm text-gray-700">
            Begin simpel: profiel + regio + contact. Later voegen we beschikbaarheid
            en filters toe.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">Eén duidelijk pakket</h2>
            <p className="mt-3 text-gray-700">
              Je betaalt een vast bedrag per maand om zichtbaar te zijn op Kraamgids.
              We houden het transparant en eenvoudig.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li>• Vermelding op Kraamgids (profielpagina)</li>
              <li>• Vindbaar op regio + type (zelfstandig/organisatie)</li>
              <li>• Contactmogelijkheden voor ouders</li>
              <li>• Later: beschikbaarheid, reviews en extra filters</li>
            </ul>
          </div>

          <div className="w-full rounded-3xl bg-[#FFF6EC] p-6 md:max-w-sm">
            <p className="text-sm font-medium" style={{ color: "var(--brand)" }}>
              Startpakket
            </p>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-4xl font-bold" style={{ color: "var(--brand)" }}>
                €X
              </span>
              <span className="text-sm text-gray-600">/ maand</span>
            </div>

            <p className="mt-3 text-sm text-gray-700">
              
            </p>

            <a href="#aanmelden" className="mt-5 inline-block brand-button">
              Aanmelden
            </a>

            <p className="mt-3 text-xs text-gray-500">
              Info
            </p>
          </div>
        </div>
      </section>

      {/* SIGNUP (prototype) */}
      <section id="aanmelden" className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold">Aanmelden (prototype)</h2>
        <p className="mt-3 text-gray-700">
          Voor nu verzamelen we aanmeldingen eenvoudig. Later koppelen we dit aan een profiel
          en betaling.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Naam (kraamverzorger/organisatie)
            </label>
            <input
              className="mt-1 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
              placeholder="Bijv. Sofie Kraamzorg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              className="mt-1 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
              placeholder="naam@voorbeeld.nl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              className="mt-1 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
              defaultValue="Zelfstandig"
            >
              <option>Zelfstandig</option>
              <option>Organisatie</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Regio (plaats/provincie)
            </label>
            <input
              className="mt-1 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
              placeholder="Bijv. Amsterdam / Noord-Holland"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            className="brand-button"
            type="button"
            onClick={() =>
              alert(
                "Nog even prototype 🙂\n\nStraks sturen we je een bevestiging en maken we samen je profiel compleet."
              )
            }
          >
            Verstuur aanmelding
          </button>

          <Link href="/blog" className="text-sm brand-link">
            Eerst even lezen wat Kraamgids is? →
          </Link>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          Let op: dit formulier verstuurt nog niets. Het is een prototype om de flow te testen.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold">Veelgestelde vragen</h2>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="font-semibold">Wanneer kan ik live met mijn profiel?</h3>
            <p className="mt-2 text-sm text-gray-700">
              We bouwen Kraamgids stap voor stap. Na je aanmelding nemen we contact op om je
              profiel als eerste live te zetten.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Kan ik mijn beschikbaarheid tonen?</h3>
            <p className="mt-2 text-sm text-gray-700">
              Dat is precies waar we naartoe werken. We starten met regio + contact en voegen
              daarna beschikbaarheid toe.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Is dit alleen voor zelfstandigen?</h3>
            <p className="mt-2 text-sm text-gray-700">
              Nee. Zelfstandigen én organisaties zijn welkom. Ouders hebben verschillende
              wensen — het belangrijkste is dat ze een passende match kunnen vinden.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-10 text-center text-sm text-gray-500">
        Vragen? We voegen binnenkort een contactpagina toe.
      </p>
    </main>
  );
}

