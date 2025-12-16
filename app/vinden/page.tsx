"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type ProviderType = "Zelfstandig" | "Organisatie";

type Provider = {
  id: string;
  name: string;
  type: ProviderType;
  region: string; // simpele regio tekst (later echte data)
  specialties: string[];
  available: "Beschikbaar" | "Beperkt" | "Wachtlijst";
};

const MOCK_PROVIDERS: Provider[] = [
  {
    id: "p1",
    name: "Sofie Kraamzorg",
    type: "Zelfstandig",
    region: "Regio Amsterdam",
    specialties: ["Borstvoeding", "Rust & ritme"],
    available: "Beschikbaar",
  },
  {
    id: "p2",
    name: "Kraamzorg Noord",
    type: "Organisatie",
    region: "Regio Noord-Holland",
    specialties: ["Tweelingzorg", "Ervaring met keizersnede"],
    available: "Beperkt",
  },
  {
    id: "p3",
    name: "Lieve Start Kraamzorg",
    type: "Zelfstandig",
    region: "Regio Utrecht",
    specialties: ["Postpartum ondersteuning", "Flesvoeding"],
    available: "Wachtlijst",
  },
  {
    id: "p4",
    name: "Samen Kraamzorg",
    type: "Organisatie",
    region: "Regio Randstad",
    specialties: ["Borstvoeding", "Praktische ondersteuning"],
    available: "Beschikbaar",
  },
];

function ChipButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full px-4 py-2 text-sm font-medium transition shadow-sm"
      style={{
        backgroundColor: active ? "var(--brand)" : "rgba(255, 246, 236, 0.9)",
        color: active ? "#fff" : "var(--brand)",
      }}
    >
      {children}
    </button>
  );
}

export default function VindenPage() {
  const params = useSearchParams();
  const postcode = params.get("postcode") || "";
  const datum = params.get("datum") || "";

  // Filters (UX-first, later koppelen aan echte data)
  const [typeFilter, setTypeFilter] = useState<ProviderType | "Alle">("Alle");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [distance, setDistance] = useState<"10" | "25" | "50">("25");

  const results = useMemo(() => {
    // Nu nog mock filtering (postcode/datum gebruiken we later voor echte matching)
    let list = [...MOCK_PROVIDERS];

    if (typeFilter !== "Alle") {
      list = list.filter((p) => p.type === typeFilter);
    }

    if (onlyAvailable) {
      list = list.filter((p) => p.available === "Beschikbaar");
    }

    // distance is nu een “feel-good” filter: we tonen het, maar filteren niet echt (nog geen geo-data)
    // Later: echte afstand op basis van postcode/lat-lng.
    return list;
  }, [typeFilter, onlyAvailable, distance]);

  return (
    <main className="mx-auto max-w-5xl">
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Kraamzorg vinden</h1>

        <p className="mt-3 text-gray-700">
          {postcode ? (
            <>
              Je zoekt in regio: <strong>{postcode}</strong>
              {datum ? (
                <>
                  {" "}
                  • Uitgerekende datum: <strong>{datum}</strong>
                </>
              ) : null}
            </>
          ) : (
            <>Vul je postcode in om te starten.</>
          )}
        </p>

        {/* FILTER CHIPS */}
        <div className="mt-6 rounded-3xl bg-[#FFF6EC] p-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <p className="mt-1 text-sm text-gray-700">
            Deze filters zijn alvast voorbereid. Straks koppelen we ze aan echte profielen en
            beschikbaarheid.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <ChipButton
              active={typeFilter === "Alle"}
              onClick={() => setTypeFilter("Alle")}
            >
              Alle
            </ChipButton>
            <ChipButton
              active={typeFilter === "Zelfstandig"}
              onClick={() => setTypeFilter("Zelfstandig")}
            >
              Zelfstandig
            </ChipButton>
            <ChipButton
              active={typeFilter === "Organisatie"}
              onClick={() => setTypeFilter("Organisatie")}
            >
              Organisatie
            </ChipButton>

            <ChipButton
              active={onlyAvailable}
              onClick={() => setOnlyAvailable((v) => !v)}
            >
              Alleen beschikbaar
            </ChipButton>

            <ChipButton
              active={distance === "10"}
              onClick={() => setDistance("10")}
            >
              Binnen 10 km
            </ChipButton>
            <ChipButton
              active={distance === "25"}
              onClick={() => setDistance("25")}
            >
              Binnen 25 km
            </ChipButton>
            <ChipButton
              active={distance === "50"}
              onClick={() => setDistance("50")}
            >
              Binnen 50 km
            </ChipButton>
          </div>
        </div>

        {/* MOCK RESULTS */}
        <div className="mt-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold">Voorbeeldresultaten</h2>
            <p className="text-sm text-gray-500">
              Filters actief:{" "}
              <span style={{ color: "var(--brand)" }}>
                {typeFilter === "Alle" ? "Alle" : typeFilter}
              </span>
              {onlyAvailable ? (
                <>
                  {" "}
                  • <span style={{ color: "var(--brand)" }}>Alleen beschikbaar</span>
                </>
              ) : null}
              {" "}
              • <span style={{ color: "var(--brand)" }}>Binnen {distance} km</span>
            </p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {results.map((p) => (
              <div key={p.id} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {p.type} • {p.region}
                    </p>
                  </div>

                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(255, 246, 236, 0.9)",
                      color: "var(--brand)",
                    }}
                  >
                    {p.available}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(255, 246, 236, 0.9)",
                        color: "var(--brand)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="brand-button"
                    onClick={() =>
                      alert(
                        "Nog even prototype 🙂\n\nStraks kun je hier direct contact opnemen of een aanvraag starten."
                      )
                    }
                  >
                    Vraag beschikbaarheid
                  </button>

                  <button
                    type="button"
                    className="text-sm brand-link"
                    onClick={() =>
                      alert(
                        "Nog even prototype 🙂\n\nStraks zie je hier een volledig profiel met reviews, werkgebied en werkwijze."
                      )
                    }
                  >
                    Bekijk profiel →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {results.length === 0 && (
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-gray-700">
                Geen voorbeelden gevonden met deze filters. Kies bijvoorbeeld “Alle”.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-3xl bg-[#FFF6EC] p-6">
          <p className="text-sm text-gray-700">
            Ben je kraamverzorger en wil je straks ook in dit overzicht staan?
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/" className="text-sm brand-link">
              ← Terug naar home
            </Link>
            <Link href="/voor-kraamverzorgers" className="brand-button">
              Voor kraamverzorgers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

