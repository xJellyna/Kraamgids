import { Suspense } from "react";
import VindenClient from "./VindenClient";

export default function VindenPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-5xl">
          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-gray-700">Even laden…</p>
          </section>
        </main>
      }
    >
      <VindenClient />
    </Suspense>
  );
}

