'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, AlertCircle, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

function UnsubscribeContent() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  // Check URL parameters
  const successParam = searchParams.get('success')
  const errorParam = searchParams.get('error')
  const emailParam = searchParams.get('email')

  useEffect(() => {
    if (successParam === 'true' && emailParam) {
      setStatus('success')
      setEmail(emailParam)
      setMessage('Disiscrizione completata con successo!')
    } else if (errorParam) {
      setStatus('error')
      switch (errorParam) {
        case 'missing-email':
          setMessage('Email mancante nel link')
          break
        case 'failed':
          setMessage('Errore durante la disiscrizione')
          break
        case 'server':
          setMessage('Errore del server. Riprova più tardi.')
          break
        default:
          setMessage('Si è verificato un errore')
      }
    }
  }, [successParam, errorParam, emailParam])

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')

    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message)
      } else {
        setStatus('error')
        setMessage(data.error || 'Errore durante la disiscrizione')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Errore di connessione. Riprova più tardi.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Back Link */}
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Torna alla Homepage
        </Link>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <Mail className="h-8 w-8 text-gray-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Disiscrizione Newsletter
            </h1>
            <p className="text-gray-600">
              Ci dispiace vederti andare via
            </p>
          </div>

          {/* Success State */}
          {status === 'success' ? (
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Disiscrizione Completata
              </h2>
              <p className="text-gray-600 mb-6">
                L'email <strong>{email}</strong> è stata rimossa dalla nostra newsletter.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-800">
                  Non riceverai più email promozionali da Italy Experience Hub.
                  Potrebbero volerci fino a 24 ore per processare completamente la richiesta.
                </p>
              </div>
              <Link 
                href="/"
                className="btn-primary w-full"
              >
                Torna alla Homepage
              </Link>
            </div>
          ) : (
            /* Unsubscribe Form */
            <>
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    <p className="text-sm text-red-800">{message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleUnsubscribe} className="space-y-6">
                <div>
                  <label htmlFor="unsubscribe-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Indirizzo Email
                  </label>
                  <input
                    id="unsubscribe-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="La tua email"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || !email.trim()}
                  className="w-full bg-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  {status === 'loading' ? 'Elaborazione...' : 'Disiscriviti'}
                </button>
              </form>

              {/* Alternative */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Invece di disiscriverti completamente, potresti:
                </p>
                <div className="space-y-2">
                  <Link 
                    href="/contatti" 
                    className="block text-sm text-primary-600 hover:text-primary-700"
                  >
                    📧 Modificare le preferenze email
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block text-sm text-primary-600 hover:text-primary-700"
                  >
                    📖 Leggere solo il blog (senza email)
                  </Link>
                </div>
              </div>
            </>
          )}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              Per domande o problemi, contattaci a <br/>
              <a href="mailto:info@italyexperiencehub.com" className="text-primary-600">
                info@italyexperiencehub.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Caricamento...</p>
        </div>
      </div>
    }>
      <UnsubscribeContent />
    </Suspense>
  )
}