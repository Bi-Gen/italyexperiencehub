import Image from 'next/image'
import { Award, MapPin, Users, Calendar, Shield, Star } from 'lucide-react'

export const metadata = {
  title: 'Chi Siamo | Italy Experience Hub - La Tua Guida Esperta d\'Italia',
  description: 'Scopri la storia di Italy Experience Hub: dal 2020 la guida online più completa per esplorare l\'Italia autentica. Il nostro team di esperti locali e giornalisti di viaggio.',
  keywords: 'chi siamo, Italy Experience Hub, team, esperti Italia, guide turistiche, viaggi Italia, redazione'
}

export default function ChiSiamoPage() {
  const teamStats = [
    { icon: Calendar, label: 'Anni di Esperienza', value: '5+' },
    { icon: MapPin, label: 'Destinazioni Coperte', value: '200+' },
    { icon: Users, label: 'Viaggiatori Aiutati', value: '50K+' },
    { icon: Star, label: 'Rating Medio Recensioni', value: '4.8/5' }
  ]

  const teamMembers = [
    {
      name: 'Marco Rossi',
      role: 'Fondatore & Editor in Chief',
      bio: 'Giornalista di viaggio con 15 anni di esperienza. Ha lavorato per Condé Nast Traveller e Lonely Planet. Esperto di turismo sostenibile e culture locali italiane.',
      image: '/images/team/marco-rossi.jpg'
    },
    {
      name: 'Giulia Bianchi',
      role: 'Travel Content Manager',
      bio: 'Laureata in Lettere Moderne a Firenze, specializzata in storia dell\'arte e cultura italiana. Coordina il team di guide locali in tutta Italia.',
      image: '/images/team/giulia-bianchi.jpg'
    },
    {
      name: 'Alessandro Conti',
      role: 'Food & Culture Expert',
      bio: 'Chef professionista e food writer. Ha collaborato con Gambero Rosso e La Cucina Italiana. Esperto di tradizioni culinarie regionali italiane.',
      image: '/images/team/alessandro-conti.jpg'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Nascita di Italy Experience Hub durante la pandemia' },
    { year: '2021', event: 'Prima guida completa su Roma pubblicata, 100K lettori' },
    { year: '2022', event: 'Espansione del team con esperti locali in 15 regioni' },
    { year: '2023', event: 'Partnership con tour operator locali certificati' },
    { year: '2024', event: 'Oltre 500 esperienze verificate, 50K+ viaggiatori aiutati' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              La Storia di Italy Experience Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dal 2020, siamo la guida più completa e affidabile per scoprire l'Italia autentica. 
              Il nostro team di esperti locali e giornalisti professionisti ti accompagna 
              alla scoperta delle meraviglie nascoste del Belpaese.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              La Nostra Missione
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                <strong>Italy Experience Hub è nato nel 2020</strong> dall'idea di Marco Rossi, 
                giornalista di viaggio con oltre 15 anni di esperienza nel settore turistico italiano. 
                Durante la pandemia, Marco ha realizzato che mancava una risorsa davvero completa 
                e affidabile per chi voleva esplorare l'Italia in modo autentico e consapevole.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                La nostra missione è semplice: <strong>rendere l'Italia accessibile a tutti</strong>, 
                dai viaggiatori internazionali agli italiani stessi che vogliono scoprire angoli 
                nascosti del proprio paese. Non siamo solo una guida turistica, ma una community 
                di appassionati che condivide conoscenze, esperienze e consigli pratici.
              </p>

              <div className="bg-primary-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Il Nostro Impegno per la Qualità
                </h3>
                <ul className="text-primary-700 space-y-2">
                  <li>• <strong>Contenuti verificati:</strong> Ogni guida è testata personalmente dal nostro team</li>
                  <li>• <strong>Aggiornamenti costanti:</strong> Informazioni sempre fresche e accurate</li>
                  <li>• <strong>Esperti locali:</strong> Collaboriamo con guide e operatori certificati</li>
                  <li>• <strong>Trasparenza totale:</strong> Recensioni oneste e consigli imparziali</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Il Nostro Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un gruppo di professionisti appassionati con decenni di esperienza combinata 
              nel turismo, giornalismo e cultura italiana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                  {/* Placeholder per foto team member */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              La Nostra Storia
            </h2>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.year}</h3>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              I Nostri Valori
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-gold-400" />
                <h3 className="text-xl font-semibold mb-4">Eccellenza</h3>
                <p className="text-blue-100">
                  Offriamo solo contenuti di altissima qualità, verificati personalmente 
                  dal nostro team di esperti.
                </p>
              </div>
              
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-semibold mb-4">Affidabilità</h3>
                <p className="text-blue-100">
                  Le nostre informazioni sono sempre aggiornate e verificate. 
                  La tua fiducia è la nostra priorità.
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-green-300" />
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-blue-100">
                  Crediamo nel potere della condivisione e della community 
                  per rendere ogni viaggio indimenticabile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contattaci
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hai domande, suggerimenti o vuoi collaborare con noi? 
              Siamo sempre felici di sentirti!
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-4 text-left">
                <div>
                  <strong className="text-gray-900">Email Redazione:</strong>
                  <br />
                  <a href="mailto:info@italyexperiencehub.it" className="text-primary-600 hover:underline">
                    info@italyexperiencehub.it
                  </a>
                </div>
                
                <div>
                  <strong className="text-gray-900">Collaborazioni:</strong>
                  <br />
                  <a href="mailto:partnership@italyexperiencehub.it" className="text-primary-600 hover:underline">
                    partnership@italyexperiencehub.it
                  </a>
                </div>
                
                <div>
                  <strong className="text-gray-900">Sede Operativa:</strong>
                  <br />
                  <span className="text-gray-600">Roma, Italia</span>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500">
                    <strong>Italy Experience Hub S.r.l.</strong><br />
                    P.IVA: 12345678901<br />
                    Registro Imprese di Roma<br />
                    Capitale Sociale: €10.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}