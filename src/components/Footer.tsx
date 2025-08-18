'use client'

import Link from 'next/link'
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react'

// Extend Window interface for Google Funding Choices
declare global {
  interface Window {
    __gpp?: (command: string) => void;
  }
}

interface FooterLink {
  name: string
  href: string
  onClick?: boolean
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks: Record<string, FooterLink[]> = {
    destinazioni: [
      { name: 'Roma', href: '/destinazioni/roma' },
      { name: 'Firenze', href: '/destinazioni/firenze' },
      { name: 'Venezia', href: '/destinazioni/venezia' },
      { name: 'Milano', href: '/destinazioni/milano' },
      { name: 'Napoli', href: '/destinazioni/napoli' },
      { name: 'Sicilia', href: '/destinazioni/sicilia' },
    ],
    esperienze: [
      { name: 'Tour Gastronomici', href: '/esperienze/food-wine' },
      { name: 'Tour in Bicicletta', href: '/esperienze/bike-tours' },
      { name: 'Noleggio Barche', href: '/esperienze/boat-rental' },
      { name: 'Arte & Cultura', href: '/esperienze/arte-cultura' },
      { name: 'Natura & Outdoor', href: '/esperienze/natura-outdoor' },
    ],
    guide: [
      { name: 'Come Prenotare', href: '/guide/come-prenotare' },
      { name: 'Quando Visitare', href: '/guide/quando-visitare' },
      { name: 'Cosa Portare', href: '/guide/cosa-portare' },
      { name: 'Trasporti', href: '/guide/trasporti' },
      { name: 'Documenti', href: '/guide/documenti' },
    ],
    azienda: [
      { name: 'Chi Siamo', href: '/chi-siamo' },
      { name: 'La Nostra Missione', href: '/missione' },
      { name: 'Partner', href: '/partner' },
      { name: 'Lavora con Noi', href: '/carriere' },
      { name: 'Stampa', href: '/stampa' },
    ],
    supporto: [
      { name: 'Contatti', href: '/contatti' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Assistenza', href: '/assistenza' },
      { name: 'Cancellazioni', href: '/cancellazioni' },
      { name: 'Rimborsi', href: '/rimborsi' },
    ],
    legale: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Termini di Servizio', href: '/termini' },
      { name: 'Cookie Policy', href: '/cookie' },
      { name: 'Impostazioni Cookie', href: '#', onClick: true },
      { name: 'Disclaimer', href: '/disclaimer' },
    ]
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-italy rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-gray-900">
                  Italy<span className="text-primary-600">Experience</span>
                </span>
                <div className="text-xs text-gray-500 leading-none">Hub</div>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-sm">
              Il portale di riferimento per scoprire l'Italia autentica. Guide complete, 
              esperienze esclusive e consigli da esperti locali.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>info@italyexperiencehub.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+39 02 1234 5678</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Destinazioni */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Destinazioni Top</h3>
            <ul className="space-y-2">
              {footerLinks.destinazioni.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Esperienze */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Esperienze</h3>
            <ul className="space-y-2">
              {footerLinks.esperienze.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guide */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Guide Pratiche</h3>
            <ul className="space-y-2">
              {footerLinks.guide.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Supporto */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Supporto</h3>
            <ul className="space-y-2">
              {footerLinks.supporto.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-md">
            <h3 className="font-semibold text-gray-900 mb-2">
              Newsletter Esclusiva
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Ricevi guide esclusive, offerte speciali e consigli di viaggio direttamente nella tua inbox.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Italy Experience Hub. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legale.map((link) => (
                link.onClick ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      // Clear cookie consent to show banner again
                      localStorage.removeItem('cookie-consent')
                      localStorage.removeItem('cookie-consent-date')
                      window.location.reload()
                    }}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}