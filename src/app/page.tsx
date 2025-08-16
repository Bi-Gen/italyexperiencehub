// src/app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Esperienze in Italia: tour, noleggi e attività selezionate",
  description:
    "Italy Experience Hub: scopri e prenota esperienze autentiche in Italia. Tour guidati, bike tour, noleggio barche, degustazioni e attività locali.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Esperienze in Italia",
    description:
      "Il punto di partenza per vivere l’Italia: tour, noleggi e attività selezionate con partner locali.",
    type: "website",
    url: "https://italyexperiencehub.com/",
  },
};

export default function HomePage() {
  const heroLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Italy Experience Hub",
    url: "https://italyexperiencehub.com/",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://italyexperiencehub.com/blog?query={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const highlights = [
    {
      title: "Noleggio Barche",
      img: "https://picsum.photos/seed/boats-home/800/450",
    },
    {
      title: "Bike Tour",
      img: "https://picsum.photos/seed/bike-home/800/450",
    },
    {
      title: "Food & Wine",
      img: "https://picsum.photos/seed/food-home/800/450",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroLd) }}
      />

      {/* HERO */}
      <section className="grid gap-6 lg:grid-cols-2 items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-3">
            Vivi esperienze autentiche in Italia
          </h1>
          <p className="text-neutral-700 mb-6 max-w-xl">
            Tour guidati, noleggi e attività locali selezionate.
            Ti aiutiamo a costruire l’itinerario perfetto: dalla costa alle
            città d’arte, dalla bici al gusto.
          </p>
          <div className="flex gap-3">
            <a
              href="/esperienze"
              className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              Scopri le esperienze
            </a>
            <a
              href="/contatti"
              className="px-5 py-3 rounded-lg border font-medium hover:bg-neutral-50"
            >
              Parla con noi
            </a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border">
          <Image
            src="https://picsum.photos/seed/italy-hero/1200/700"
            alt="Esperienze in Italia"
            width={1200}
            height={700}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Le categorie più richieste
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <a
              key={h.title}
              href="/esperienze"
              className="rounded-xl overflow-hidden border hover:shadow-sm transition"
              aria-label={`Scopri ${h.title}`}
            >
              <Image
                src={h.img}
                alt={h.title}
                width={800}
                height={450}
                className="w-full h-44 object-cover"
                unoptimized
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="text-sm text-neutral-700">
                  Partner verificati e assistenza dedicata.
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PARAGRAFO SEO */}
      <section className="max-w-3xl mt-12 text-neutral-800 leading-relaxed">
        <h2 className="text-xl font-semibold mb-2">
          Italy Experience Hub: come funziona
        </h2>
        <p>
          Collaboriamo con operatori locali per offrire esperienze di qualità:
          noleggi barche con o senza skipper, itinerari in bici, tour privati,
          degustazioni e attività outdoor. Ti consigliamo in base a periodo,
          budget e interessi, curando logistica e assistenza. Inizia dalla
          pagina <a href="/esperienze" className="text-blue-600 hover:underline">
          Esperienze</a> oppure esplora le guide del{" "}
          <a href="/blog" className="text-blue-600 hover:underline">blog</a>.
        </p>
      </section>
    </main>
  );
}
