'use client'

import { Settings } from 'lucide-react'

export default function CookieSettingsButton() {
  const handleCookieSettings = () => {
    localStorage.removeItem('cookie-consent')
    localStorage.removeItem('cookie-consent-date')
    window.location.reload()
  }

  return (
    <button
      onClick={handleCookieSettings}
      className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
    >
      <Settings className="h-4 w-4 mr-2" />
      Modifica Preferenze
    </button>
  )
}