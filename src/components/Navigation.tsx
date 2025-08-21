'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Destinazioni', 
    href: '/destinazioni',
    submenu: [
      { name: 'Roma', href: '/destinazioni/roma' },
      { name: 'Firenze', href: '/destinazioni/firenze' },
      { name: 'Venezia', href: '/destinazioni/venezia' },
      { name: 'Milano', href: '/destinazioni/milano' },
      { name: 'Napoli', href: '/destinazioni/napoli' },
      { name: 'Sicilia', href: '/destinazioni/sicilia' },
      { name: 'Toscana', href: '/destinazioni/toscana' },
      { name: 'Costa Amalfitana', href: '/destinazioni/costiera-amalfitana' },
      { name: 'Villetta Barrea', href: '/destinazioni/villetta-barrea' },
    ]
  },
  { 
    name: 'Esperienze', 
    href: '/esperienze',
    submenu: [
      { name: 'Tour Gastronomici', href: '/esperienze/food-wine' },
      { name: 'Tour in Bicicletta', href: '/esperienze/bike-tours' },
      { name: 'Noleggio Barche', href: '/esperienze/boat-rental' },
      { name: 'Arte & Cultura', href: '/esperienze/arte-cultura' },
      { name: 'Natura & Outdoor', href: '/esperienze/natura-outdoor' },
    ]
  },
  { name: 'Guide Pratiche', href: '/guide' },
  { name: 'Blog', href: '/blog' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Italy Experience Hub" 
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-gray-900">
                Italy<span className="text-primary-600">Experience</span>
              </span>
              <div className="text-xs text-gray-500 leading-none">Hub</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.submenu ? item.name : null)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href || pathname?.startsWith(item.href + '/')
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-4 pb-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    </div>
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.href
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        )}
      </div>
    </nav>
  )
}