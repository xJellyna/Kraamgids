import Link from "next/link";

export default function KraamzorgRegelenPost() {
  return (
    <main className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
      <Link href="/blog" className="text-sm brand-link">
        ← Terug naar blog
      </Link>

      <h1 className="mt-4 text-3xl font-bold">
        Kraamzorg regelen: wanneer begin je en waar let je op?
      </h1>
      <p className="mt-2 text-sm text-gray-500">13 december 2025</p>

      <article className="prose prose-lg prose-headings:text-[#5B3A82] mt-8 max-w-none">
        <p>
          Kraamzorg regelen voelt voor veel (aanstaande) ouders als iets wat “nog wel kan”.
          Toch blijkt in de praktijk dat beschikbaarheid niet altijd vanzelfsprekend is.
          Zeker in drukke periodes kan het lastig zijn om een passende kraamverzorger te vinden.
        </p>

        <p>
          In dit artikel leggen we rustig en overzichtelijk uit <strong>wanneer</strong> je
          kraamzorg regelt, <strong>waar</strong> je op let bij je keuze en <strong>wat</strong>{" "}
          je kunt doen als jouw voorkeurskraamzorg geen plek meer heeft.
        </p>

        <h2>Wanneer moet je kraamzorg regelen?</h2>
        <p>
          Het advies is om kraamzorg <strong>zo vroeg mogelijk</strong> te regelen, het liefst in
          het eerste trimester.
        </p>
        <ul>
          <li>Je hebt meer keuze</li>
          <li>Kraamverzorgenden kunnen beter vooruit plannen</li>
          <li>Je voorkomt stress later in de zwangerschap</li>
        </ul>

        <h2>Kraamzorg via een organisatie of een zelfstandige?</h2>
        <h3>Kraamzorg via een organisatie</h3>
        <ul>
          <li>je weet vaak later wie er komt</li>
          <li>beschikbaarheid kan wisselen</li>
          <li>soms meerdere kraamverzorgenden</li>
        </ul>

        <h3>Zelfstandige kraamverzorgende</h3>
        <ul>
          <li>vaak één vast gezicht</li>
          <li>meer afstemming op jouw wensen</li>
          <li>direct contact</li>
        </ul>

        <h2>Waar let je op bij het kiezen van kraamzorg?</h2>
        <ul>
          <li><strong>Werkgebied</strong>: actief in jouw regio?</li>
          <li><strong>Beschikbaarheid</strong>: rond jouw uitgerekende datum?</li>
          <li><strong>Werkwijze</strong>: past het bij jullie?</li>
          <li><strong>Ervaring</strong>: bv. borstvoeding of specifieke situaties</li>
          <li><strong>Gevoel</strong>: voelt het vertrouwd?</li>
        </ul>

        <h2>Wat als kraamzorg vol zit?</h2>
        <ul>
          <li>breder zoeken in de regio</li>
          <li>zelfstandigen benaderen</li>
          <li>wachtlijsten vragen</li>
          <li>advies vragen aan je verloskundige</li>
        </ul>

        <h2>Tot slot</h2>
        <p>
          Door op tijd te regelen en een goede match te kiezen, geef je jezelf rust en vertrouwen
          voor de kraamtijd.
        </p>
      </article>
    </main>
  );
}
