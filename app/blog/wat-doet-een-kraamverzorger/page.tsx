import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";

export default function WatDoetEenKraamverzorgerPost() {
  return (
    <BlogPostLayout
      title="Wat doet een kraamverzorger precies? (en wat kun je verwachten in de kraamweek)"
      date="14 december 2025"
    >
      <p>
        Kraamzorg is er om jou en je baby te ondersteunen in de eerste dagen na de bevalling. Toch is het niet altijd duidelijk wat een kraamverzorger precies doet.
      </p>


      <h2>Wat kun je verwachten?</h2>
      <ul>
        <li>• Ondersteuning bij zorg voor moeder en baby</li>
        <li>• Praktische hulp die rust en hygiëne ondersteunt</li>
        <li>• Begeleiding bij borstvoeding of flesvoeding</li>
        <li>• Uitleg en vertrouwen voor jou en je partner</li>
        <li>• Signaleren en afstemmen met de verloskundige bij twijfel</li>
      </ul>

      <h2>Tot slot</h2>
      <p>
        Kraamzorg is er voor een goede start: ondersteuning, uitleg en rust in huis.
        Kraamgids helpt je op weg naar kraamzorg die bij jullie past.
      </p>

      <p>
        Lees ook:{" "}
        <Link className="underline" href="/blog/kraamzorg-regelen">
          Kraamzorg regelen: wanneer begin je en waar let je op?
        </Link>
      </p>
    </BlogPostLayout>
  );
}

