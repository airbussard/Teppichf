'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Kurze Verzögerung für sanftere Animation
      setTimeout(() => {
        setShowBanner(true)
        setIsAnimating(true)
      }, 500)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsAnimating(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsAnimating(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  if (!showBanner) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {/* Modal */}
      <div
        className={`bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
          isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🍪</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Cookie-Einstellungen</h3>
          </div>

          {/* Content */}
          <p className="text-gray-600 text-center mb-4">
            Wir verwenden technisch notwendige Cookies zur Funktion der Website
            (z.B. Speicherung Ihrer Cookie-Präferenz).
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-burgundy hover:text-burgundy-dark underline transition-colors"
            >
              {showDetails ? 'Weniger anzeigen' : 'Mehr erfahren'}
            </button>
            <Link
              href="/datenschutz"
              className="text-sm text-burgundy hover:text-burgundy-dark underline transition-colors"
            >
              Datenschutz
            </Link>
          </div>

          {/* Details (expandable) */}
          {showDetails && (
            <div className="mb-6 space-y-3">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <input type="checkbox" checked disabled className="mt-1 accent-burgundy" />
                  <div>
                    <p className="font-semibold text-gray-900">Technisch notwendige Cookies</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Speicherung Ihrer Cookie-Einwilligung im Browser (localStorage)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <input type="checkbox" disabled className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Analyse-Cookies</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Derzeit nicht aktiv
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptNecessary}
              className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:border-burgundy hover:text-burgundy transition-all duration-200"
            >
              Nur Notwendige
            </button>
            <button
              onClick={acceptAll}
              className="flex-1 px-6 py-3 bg-burgundy text-white rounded-xl font-semibold hover:bg-burgundy-dark transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Alle akzeptieren
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            Sie können Ihre Einwilligung jederzeit im Footer widerrufen.
          </p>
        </div>
      </div>
    </div>
  )
}
