import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Benvenuto nel tuo spazio web
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Una base solida, veloce e ottimizzata SEO, pronta a diventare ciò che
          vuoi: blog, vetrina, e-commerce, SaaS o community.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link
            href="/about"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Scopri di più
          </Link>
          <Link
            href="/contatti"
            className="rounded-lg border border-neutral-300 px-5 py-3 hover:bg-neutral-50"
          >
            Contattaci
          </Link>
        </div>
      </section>

      {/* Section Placeholder: Servizi / Prodotti */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Cosa potresti offrire</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg mb-2">📚 Blog o Notizie</h3>
            <p className="text-neutral-600">
              Condividi articoli, guide o novità per attrarre visitatori e
              migliorare il posizionamento sui motori di ricerca.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg mb-2">🛍️ Vetrina / E-commerce</h3>
            <p className="text-neutral-600">
              Mostra e vendi i tuoi prodotti o servizi con facilità.
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg mb-2">💻 SaaS o App</h3>
            <p className="text-neutral-600">
              Offri strumenti o servizi digitali con accesso riservato agli
              utenti registrati.
            </p>
          </div>
        </div>
      </section>

      {/* Section Placeholder: Testimonianze */}
      <section className="bg-neutral-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Cosa dicono le persone</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <blockquote className="border-l-4 pl-4 text-neutral-700">
            “Un sito veloce e ben strutturato: perfetto per far crescere il mio
            progetto.”
          </blockquote>
          <blockquote className="border-l-4 pl-4 text-neutral-700">
            “Facile da gestire e già ottimizzato per la SEO. Consigliato!”
          </blockquote>
        </div>
      </section>

      {/* Call to Action finale */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Pronto a dare vita al tuo progetto?</h2>
        <Link
          href="/contatti"
          className="inline-block rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          Iniziamo
        </Link>
      </section>
    </main>
  );
}
