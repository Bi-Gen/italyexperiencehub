'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Mail, Loader2 } from 'lucide-react'

interface NewsletterFormProps {
  source?: string
  className?: string
  variant?: 'default' | 'inline' | 'popup'
  showTitle?: boolean
  customTitle?: string
  customDescription?: string
}

export default function NewsletterForm({ 
  source = 'website',
  className = '',
  variant = 'default',
  showTitle = true,
  customTitle,
  customDescription
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          source 
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log('SUCCESS! Newsletter signup completed:', data)
        setStatus('success')
        setMessage(data.message)
        setEmail('')
        
        // Analytics tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: source,
          })
        }
      } else {
        console.log('ERROR response:', data)
        setStatus('error')
        setMessage(data.error || 'Errore durante l\'iscrizione')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Errore di connessione. Riprova più tardi.')
    }

    // Reset status dopo 5 secondi
    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'inline':
        return 'bg-gray-50 p-6 rounded-lg border'
      case 'popup':
        return 'bg-white p-8 rounded-xl shadow-2xl border'
      default:
        return 'bg-gradient-italy text-white py-16 lg:py-24'
    }
  }

  const isDefaultVariant = variant === 'default'

  return (
    <section className={`${getVariantClasses()} ${className}`}>
      <div className={isDefaultVariant ? 'container-custom text-center' : 'text-center'}>
        {showTitle && (
          <>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Mail className={`h-6 w-6 ${isDefaultVariant ? 'text-gold-400' : 'text-primary-600'}`} />
              <span className={`font-semibold ${isDefaultVariant ? 'text-gold-400' : 'text-primary-600'}`}>
                Newsletter Esclusiva
              </span>
            </div>
            
            <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${isDefaultVariant ? 'text-white' : 'text-gray-900'}`}>
              {customTitle || 'Non Perdere Nessun Consiglio'}
            </h2>
            
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDefaultVariant ? 'text-blue-100' : 'text-gray-600'}`}>
              {customDescription || 'Iscriviti alla nostra newsletter per ricevere guide esclusive, offerte speciali e i migliori consigli di viaggio'}
            </p>
          </>
        )}
        
        {status === 'success' ? (
          <div className="max-w-md mx-auto">
            <div className={`flex items-center justify-center space-x-2 p-4 rounded-xl ${isDefaultVariant ? 'bg-green-500/20 text-green-100' : 'bg-green-50 text-green-800'}`}>
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">{message}</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex space-x-3">
              <label htmlFor={`newsletter-email-${source}`} className="sr-only">
                La tua email
              </label>
              <input
                id={`newsletter-email-${source}`}
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                required
                disabled={status === 'loading'}
                className={`flex-1 px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-colors ${
                  isDefaultVariant 
                    ? 'text-gray-900 bg-white focus:ring-accent-400 border-transparent' 
                    : 'text-gray-900 bg-white focus:ring-primary-500 border-gray-200'
                } ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email.trim()}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDefaultVariant
                    ? 'bg-accent-500 hover:bg-accent-600 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Iscrizione...</span>
                  </>
                ) : (
                  <span>Iscriviti</span>
                )}
              </button>
            </div>
            
            {status === 'error' && (
              <div className={`flex items-center justify-center space-x-2 mt-4 p-3 rounded-lg ${isDefaultVariant ? 'bg-red-500/20 text-red-100' : 'bg-red-50 text-red-800'}`}>
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">{message}</span>
              </div>
            )}
          </form>
        )}
        
        {status !== 'success' && (
          <p className={`text-sm mt-4 ${isDefaultVariant ? 'text-blue-200' : 'text-gray-500'}`}>
            Più di 25.000 viaggiatori si fidano dei nostri consigli
          </p>
        )}
      </div>
    </section>
  )
}