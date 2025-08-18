import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Italy Experience Hub',
  description: 'Privacy Policy e Informativa sui Cookie di Italy Experience Hub. Informazioni su raccolta, utilizzo e protezione dei dati personali.',
  robots: { index: true, follow: true }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Ultimo aggiornamento: 18 agosto 2025
            </p>

            <section className="mb-12">
              <h2>1. Introduzione</h2>
              <p>
                Italy Experience Hub ("noi", "nostro") si impegna a proteggere la privacy dei visitatori del nostro sito web 
                italyexperiencehub.com. Questa Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni 
                personali in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) dell'UE.
              </p>
            </section>

            <section className="mb-12">
              <h2>2. Dati che Raccogliamo</h2>
              <h3>2.1 Dati forniti volontariamente</h3>
              <ul>
                <li>Nome e indirizzo email quando ti iscrivi alla newsletter</li>
                <li>Informazioni di contatto quando ci invii messaggi</li>
                <li>Commenti e recensioni che lasci sul sito</li>
              </ul>

              <h3>2.2 Dati raccolti automaticamente</h3>
              <ul>
                <li>Indirizzo IP e informazioni del browser</li>
                <li>Pagine visitate e tempo di permanenza</li>
                <li>Referrer e dati di navigazione</li>
                <li>Cookie e tecnologie simili</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>3. Come Utilizziamo i Tuoi Dati</h2>
              <ul>
                <li><strong>Newsletter:</strong> Per inviarti contenuti di viaggio e offerte (solo con tuo consenso)</li>
                <li><strong>Miglioramento del sito:</strong> Per analizzare l'utilizzo e migliorare l'esperienza utente</li>
                <li><strong>Comunicazioni:</strong> Per rispondere alle tue richieste e fornire supporto</li>
                <li><strong>Marketing:</strong> Per mostrarti contenuti personalizzati e pubblicità pertinente</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>4. Cookie e Tecnologie di Tracciamento</h2>
              <p>Utilizziamo diversi tipi di cookie:</p>
              
              <h3>4.1 Cookie Essenziali</h3>
              <p>Necessari per il funzionamento del sito (preferenze, sicurezza).</p>

              <h3>4.2 Cookie Analitici</h3>
              <p>Google Analytics per comprendere come gli utenti utilizzano il sito.</p>

              <h3>4.3 Cookie Pubblicitari</h3>
              <p>Google AdSense per mostrare annunci personalizzati e rilevanti.</p>

              <h3>4.4 Gestione Cookie</h3>
              <p>
                Puoi gestire le tue preferenze sui cookie tramite il banner che appare al primo accesso 
                o modificando le impostazioni del tuo browser.
              </p>
            </section>

            <section className="mb-12">
              <h2>5. Condivisione dei Dati</h2>
              <p>I tuoi dati possono essere condivisi con:</p>
              <ul>
                <li><strong>Google:</strong> Per Analytics, AdSense e servizi di marketing</li>
                <li><strong>Provider email:</strong> Per l'invio delle newsletter</li>
                <li><strong>Autorità competenti:</strong> Se richiesto dalla legge</li>
              </ul>
              <p>Non vendiamo mai i tuoi dati personali a terzi.</p>
            </section>

            <section className="mb-12">
              <h2>6. I Tuoi Diritti (GDPR)</h2>
              <p>Hai il diritto di:</p>
              <ul>
                <li><strong>Accesso:</strong> Richiedere una copia dei tuoi dati personali</li>
                <li><strong>Rettifica:</strong> Correggere dati inesatti o incompleti</li>
                <li><strong>Cancellazione:</strong> Richiedere la rimozione dei tuoi dati</li>
                <li><strong>Limitazione:</strong> Limitare il trattamento dei tuoi dati</li>
                <li><strong>Portabilità:</strong> Ricevere i tuoi dati in formato leggibile</li>
                <li><strong>Opposizione:</strong> Opporti al trattamento per motivi legittimi</li>
                <li><strong>Revoca consenso:</strong> Ritirare il consenso in qualsiasi momento</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>7. Sicurezza dei Dati</h2>
              <p>
                Implementiamo misure di sicurezza appropriate per proteggere i tuoi dati personali da accessi non autorizzati, 
                alterazione, divulgazione o distruzione. Utilizziamo:
              </p>
              <ul>
                <li>Crittografia SSL/TLS per tutte le comunicazioni</li>
                <li>Accesso limitato ai dati personali</li>
                <li>Backup regolari e sicuri</li>
                <li>Monitoraggio continuo della sicurezza</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>8. Conservazione dei Dati</h2>
              <p>Conserviamo i tuoi dati personali per il tempo necessario per:</p>
              <ul>
                <li>Fornire i nostri servizi</li>
                <li>Rispettare gli obblighi legali</li>
                <li>Risolvere eventuali controversie</li>
              </ul>
              <p>I dati della newsletter vengono conservati fino alla cancellazione dell'iscrizione.</p>
            </section>

            <section className="mb-12">
              <h2>9. Servizi di Terze Parti</h2>
              <p>Il nostro sito utilizza servizi di terze parti che hanno le proprie privacy policy:</p>
              <ul>
                <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Privacy Policy Google</a></li>
                <li><strong>Google AdSense:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Come Google utilizza i dati</a></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>10. Trasferimenti Internazionali</h2>
              <p>
                Alcuni dei nostri fornitori di servizi potrebbero essere ubicati al di fuori dello Spazio Economico Europeo (SEE). 
                In tali casi, garantiamo che i trasferimenti siano effettuati in conformità al GDPR e con adeguate garanzie di protezione.
              </p>
            </section>

            <section className="mb-12">
              <h2>11. Minori</h2>
              <p>
                Il nostro sito non è destinato a minori di 16 anni. Non raccogliamo consapevolmente dati personali da minori. 
                Se vieni a conoscenza che un minore ci ha fornito dati personali, ti preghiamo di contattarci.
              </p>
            </section>

            <section className="mb-12">
              <h2>12. Modifiche alla Privacy Policy</h2>
              <p>
                Ci riserviamo il diritto di aggiornare questa Privacy Policy. Le modifiche sostanziali saranno comunicate 
                tramite avviso sul sito o email. Ti incoraggiamo a rivedere periodicamente questa pagina.
              </p>
            </section>

            <section className="mb-12">
              <h2>13. Contatti</h2>
              <p>Per qualsiasi domanda riguardo questa Privacy Policy o per esercitare i tuoi diritti, puoi contattarci:</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p><strong>Italy Experience Hub</strong></p>
                <p>Email: privacy@italyexperiencehub.com</p>
                <p>Sito web: https://italyexperiencehub.com</p>
              </div>
              
              <p className="mt-4">
                <strong>Data Protection Officer (DPO):</strong> Per questioni specifiche sulla protezione dei dati, 
                puoi contattare il nostro DPO all'indirizzo: dpo@italyexperiencehub.com
              </p>
            </section>

            <section className="mb-12">
              <h2>14. Autorità di Controllo</h2>
              <p>
                Hai il diritto di presentare un reclamo all'autorità di controllo competente se ritieni che il trattamento 
                dei tuoi dati personali violi il GDPR. In Italia, l'autorità competente è il Garante per la Protezione dei Dati Personali.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}