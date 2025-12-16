import BlogPostLayout from "@/components/BlogPostLayout";

export default function KraamzorgRegelenPost() {
  return (
    <BlogPostLayout
      title="Kraamzorg regelen: wanneer begin je en waar let je op?"
      date="13 december 2025"
      intro="Wanneer regel je kraamzorg, waar let je op bij je keuze en wat kun je doen als het vol zit in jouw regio? We leggen het rustig en overzichtelijk uit."
      related={[
        {
          title: "Wat doet een kraamverzorger precies?",
          slug: "wat-doet-een-kraamverzorger",
        },
      ]}
    >
      <p>
        Kraamzorg regelen voelt voor veel (aanstaande) ouders als iets wat
        “nog wel kan”. Toch blijkt in de praktijk dat beschikbaarheid niet
        altijd vanzelfsprekend is.
      </p>

      <h2>Wanneer moet je kraamzorg regelen?</h2>
      <p>
        Het advies is om kraamzorg zo vroeg mogelijk te regelen, bij voorkeur
        in het eerste trimester.
      </p>

      <h2>Waar let je op bij het kiezen?</h2>
      <ul>
        <li>Beschikbaarheid rond je uitgerekende datum</li>
        <li>Werkgebied en reistijd</li>
        <li>Werkwijze en persoonlijk gevoel</li>
      </ul>
    </BlogPostLayout>
  );
}
