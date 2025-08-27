import { Info, ExternalLink, Shield, Heart } from 'lucide-react'

interface ContentDisclaimerProps {
  className?: string
  showAffiliateNotice?: boolean
  showSponsorshipNotice?: boolean
}

export default function ContentDisclaimer({ 
  className = '',
  showAffiliateNotice = false,
  showSponsorshipNotice = false
}: ContentDisclaimerProps) {
  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg p-6 ${className}`}>
      <div className="flex items-start space-x-3">
        <Info className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-amber-800 mb-3">
            Trasparenza e Qualità dei Contenuti
          </h3>
          
          <div className="space-y-4 text-sm text-amber-800">
            <div className="flex items-start space-x-2">
              <Shield className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p>
                <strong>Contenuti Originali:</strong> Tutti i nostri articoli sono scritti dal nostro team 
                di esperti italiani e mai copiati da altre fonti. Ogni informazione è verificata personalmente.
              </p>
            </div>
            
            <div className="flex items-start space-x-2">
              <Heart className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p>
                <strong>Indipendenza Editoriale:</strong> Le nostre recensioni e raccomandazioni sono sempre 
                oneste e imparziali, basate sulla nostra esperienza diretta e quella della nostra community.
              </p>
            </div>
            
            {showAffiliateNotice && (
              <div className="flex items-start space-x-2">
                <ExternalLink className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Link di Affiliazione:</strong> Alcuni link in questo articolo possono generare 
                  una piccola commissione che ci aiuta a mantenere il sito gratuito, senza costi aggiuntivi per te.
                </p>
              </div>
            )}
            
            {showSponsorshipNotice && (
              <div className="bg-amber-100 p-3 rounded-md mt-3">
                <p className="text-xs text-amber-700">
                  <strong>Contenuto Sponsorizzato:</strong> Questo articolo è stato realizzato in collaborazione 
                  con i nostri partner. Tutte le opinioni rimangono completamente indipendenti.
                </p>
              </div>
            )}
            
            <div className="border-t border-amber-200 pt-3 mt-4">
              <p className="text-xs text-amber-700">
                <strong>Contatti:</strong> Per segnalazioni o feedback sui contenuti, scrivici a 
                <a href="mailto:redazione@italyexperiencehub.it" className="underline ml-1">
                  redazione@italyexperiencehub.it
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}