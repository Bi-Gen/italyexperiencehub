import { Shield, Award, CheckCircle, Globe, Clock } from 'lucide-react'

interface ExpertiseIndicatorProps {
  className?: string
}

export default function ExpertiseIndicator({ className = '' }: ExpertiseIndicatorProps) {
  const indicators = [
    {
      icon: Shield,
      title: 'Contenuti Verificati',
      description: 'Ogni guida è testata dal nostro team di esperti locali'
    },
    {
      icon: Award,
      title: '5+ Anni di Esperienza',
      description: 'Dal 2020 la guida più completa per il turismo italiano'
    },
    {
      icon: CheckCircle,
      title: 'Informazioni Aggiornate',
      description: 'Contenuti rivisti mensilmente per accuratezza'
    },
    {
      icon: Globe,
      title: '50K+ Viaggiatori Aiutati',
      description: 'Community internazionale di viaggiatori soddisfatti'
    }
  ]

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Perché Fidarsi di Italy Experience Hub
        </h2>
        <p className="text-gray-600">
          La tua sicurezza e soddisfazione sono la nostra priorità assoluta
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {indicators.map((indicator, index) => {
          const Icon = indicator.icon
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Icon className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {indicator.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="mt-8 p-4 bg-white rounded-lg border">
        <div className="flex items-center space-x-3">
          <Clock className="h-5 w-5 text-green-600" />
          <div className="text-sm">
            <span className="font-medium text-gray-900">Ultimo aggiornamento:</span>
            <span className="text-gray-600 ml-2">Gennaio 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}