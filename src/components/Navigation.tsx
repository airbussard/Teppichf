'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Scroll-Erkennung für Backdrop-Effekt
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Schließe Mobile-Menü bei Routenwechsel
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const navLinks = [
    { href: '/', label: 'Start' },
    { href: '/verkauf', label: 'Verkauf' },
    { href: '/ankauf', label: 'Ankauf' },
    { href: '/waesche', label: 'Teppichwäsche' },
    { href: '/reparatur', label: 'Reparatur' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-burgundy to-burgundy-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-burgundy leading-none">
                  Teppichhaus
                </span>
                <span className="text-xs sm:text-sm text-gray-600 leading-none">
                  am Dornbusch
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-burgundy'
                    : 'text-gray-700 hover:text-burgundy'
                }`}
              >
                {link.label}
                {/* Animierte Unterstreichung */}
                <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gold rounded-full transition-all duration-300 ease-out ${
                  isActive(link.href)
                    ? 'w-6 -translate-x-1/2'
                    : 'w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0'
                }`} />
              </Link>
            ))}
            <Link
              href="/kontakt"
              className={`ml-2 px-5 lg:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/kontakt')
                  ? 'bg-gold text-gray-900 shadow-md'
                  : 'bg-burgundy text-white hover:bg-burgundy-dark shadow-md hover:shadow-lg'
              }`}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-burgundy focus:outline-none transition-colors"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - mit Animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? 'bg-cream text-burgundy border-l-4 border-gold'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-burgundy'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className={`block px-4 py-3 rounded-lg font-semibold text-center transition-all duration-200 ${
              isActive('/kontakt')
                ? 'bg-gold text-gray-900'
                : 'bg-burgundy text-white hover:bg-burgundy-dark'
            }`}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  )
}
