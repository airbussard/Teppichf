'use client'

import Link from 'next/link'

export default function Footer() {
  const resetCookieConsent = () => {
    localStorage.removeItem('cookieConsent')
    localStorage.removeItem('cookieConsentDate')
    window.location.reload()
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Beschreibung */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-tight">Teppichhaus</span>
                <span className="text-sm text-gold leading-tight">am Dornbusch</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ihr Spezialist für hochwertige Orientteppiche und Perserteppiche in Frankfurt am Main. Tradition und Qualität seit vielen Jahren.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold"></span>
              Leistungen
            </h3>
            <div className="space-y-3">
              <Link href="/verkauf" className="block text-gray-300 hover:text-gold transition-colors duration-300">
                Teppichverkauf
              </Link>
              <Link href="/ankauf" className="block text-gray-300 hover:text-gold transition-colors duration-300">
                Teppichankauf
              </Link>
              <Link href="/waesche" className="block text-gray-300 hover:text-gold transition-colors duration-300">
                Teppichwäsche
              </Link>
              <Link href="/reparatur" className="block text-gray-300 hover:text-gold transition-colors duration-300">
                Teppichreparatur
              </Link>
              <Link href="/angebote" className="block text-gray-300 hover:text-gold transition-colors duration-300">
                Aktuelle Angebote
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold"></span>
              Kontakt
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Am Dornbusch 24<br />
                  60320 Frankfurt am Main
                </span>
              </p>
              <a href="tel:069232581" className="flex items-center gap-3 hover:text-gold transition-colors duration-300">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>069 - 232 581</span>
              </a>
              <a href="tel:01729511370" className="flex items-center gap-3 hover:text-gold transition-colors duration-300">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>0172 951 1370</span>
              </a>
              <a href="mailto:info@teppich-frankfurt.de" className="flex items-center gap-3 hover:text-gold transition-colors duration-300">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@teppich-frankfurt.de</span>
              </a>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold"></span>
              Rechtliches
            </h3>
            <div className="space-y-3">
              <Link href="/impressum" className="block text-gray-300 hover:text-gold transition-colors duration-300">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-gray-300 hover:text-gold transition-colors duration-300">
                Datenschutz
              </Link>
              <Link href="/agb" className="block text-gray-300 hover:text-gold transition-colors duration-300">
                AGB
              </Link>
              <button
                type="button"
                onClick={resetCookieConsent}
                className="block text-gray-300 hover:text-gold transition-colors duration-300 text-left"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} S. Koukpari Handelsgesellschaft mbH. Alle Rechte vorbehalten.
            </p>
            <p className="text-sm text-gray-400">
              Website entwickelt mit{' '}
              <span className="text-gold">❤️</span>
              {' '}von{' '}
              <a
                href="https://getemergence.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors duration-300"
              >
                getemergence.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
