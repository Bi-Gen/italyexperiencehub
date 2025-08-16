// src/app/esperienze/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esperienze autentiche in Italia: tour, noleggi e attività",
  description:
    "Scopri esperienze indimenticabili in Italia: bike tour, noleggio barche, degustazioni, escursioni e attività locali selezionate.",
  alternates: { canonical: "/esperienze" },
  openGraph: {
    title: "Esperienze autentiche in Italia",
    description:
      "Tour guidati, noleggi e attività locali in tutta Italia. Scopri e prenota le migliori esperienze.",
    type: "website",
    url: "https://italyexperiencehub.com/esperienze",
  },
  robots: { index: true, follow: true },
};

export default function EsperienzePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Esperienze in Italia",
    url: "https://italyexperiencehub.com/esperienze",
    hasPart: [
      { "@type": "ItemList", name: "Bike tour", url: "#bike" },
      { "@type": "ItemList", name: "Noleggio barche", url: "#barche" },
      { "@type": "ItemList", name: "Food & wine", url: "#food" },
    ],
  };

  const cards = [
    {
      id: "barche",
      title: "Noleggio Barche",
      desc:
        "Gommoni, barche e charter con skipper nelle migliori località costiere.",
      img: "https://picsum.photos/seed/boats/800/450",
    },
    {
      id: "bike",
      title: "Bike Tour",
      desc:
        "Percorsi guidati e noleggio bici per scoprire città e natura in sicurezza.",
      img: "https://picsum.photos/seed/bike/800/450",
    },
    {
      id: "food",
      title: "Food & Wine",
      desc:
        "Degustazioni, cooking class e tour enogastronomici con realtà locali.",
      img: "https://picsum.photos/seed/food/800/450",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Esperienze autentiche in Italia
        </h1>
        <p className="text-neutral-700 max-w-3xl">
          Selezioniamo tour, attività e noleggi in tutta Italia con partner
          affidabili: vivrai esperienze vere, sicure e memorabili. Inizia dalle
          categorie qui sotto e contattaci per consigli personalizzati.
        </p>
      </header>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.id}
            id={c.id}
            className="rounded-xl overflow-hidden border hover:shadow-sm transition"
          >
            <Image
              src={c.img}
              alt={c.title}
              width={800}
              height={450}
              className="w-full h-44 object-cover"
              unoptimized
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="text-neutral-700">{c.desc}</p>
              <a
                href="/contatti"
                className="inline-block text-sm font-medium text-blue-600 hover:underline"
                aria-label={`Richiedi info su ${c.title}`}
              >
                Richiedi info →
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-14 max-w-3xl space-y-4">
        <h3 className="text-2xl font-semibold">Perché scegliere noi</h3>
        <ul className="list-disc ml-5 text-neutral-800 space-y-2">
          <li>Partner verificati e coperture assicurative dove richiesto.</li>
          <li>Consulenza gratuita per costruire l’itinerario perfetto.</li>
          <li>Supporto prima e durante l’esperienza.</li>
        </ul>
        <p className="pt-2">
          Vuoi pubblicare la tua esperienza sul portale?{" "}
          <a href="/contatti" className="text-blue-600 hover:underline">
            Contattaci
          </a>
          .
        </p>
      </section>
    </main>
  );
}
