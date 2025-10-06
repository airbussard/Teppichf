'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
    // Hier könnte Analytics initialisiert werden
    // initializeAnalytics()
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
    // Tracking-Scripts NICHT laden
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-2xl z-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">🍪 Cookie-Einstellungen</h3>
              <p className="text-sm text-gray-300 mb-3">
                Wir verwenden technisch notwendige Cookies zur Funktion der Website (z.B. Speicherung Ihrer Cookie-Präferenz).
                Optional können Sie uns erlauben, Analyse-Cookies zu verwenden, um die Website zu verbessern.{' '}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-red-400 hover:text-red-300 underline"
                >
                  {showDetails ? 'Weniger anzeigen' : 'Mehr erfahren'}
                </button>
              </p>
              <Link
                href="/datenschutz"
                className="text-sm text-red-400 hover:text-red-300 underline"
              >
                Zur Datenschutzerklärung →
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={acceptNecessary}
                className="px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition font-semibold"
              >
                Nur Notwendige
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-3 bg-red-700 rounded-lg hover:bg-red-800 transition font-semibold"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>

          {showDetails && (
            <div className="border-t border-gray-700 pt-4">
              <h4 className="font-bold mb-3 text-white">Cookie-Details:</h4>

              <div className="space-y-3 text-sm">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" checked disabled className="mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-white">Technisch notwendige Cookies (erforderlich)</p>
                      <p className="text-gray-400 text-xs mt-1">
                        <strong>Zweck:</strong> Speicherung Ihrer Cookie-Einwilligung<br />
                        <strong>Name:</strong> cookieConsent, cookieConsentDate<br />
                        <strong>Speicherort:</strong> localStorage (lokal im Browser)<br />
                        <strong>Laufzeit:</strong> Unbegrenzt (bis zur manuellen Löschung)<br />
                        <strong>Anbieter:</strong> Diese Website
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-white">Analyse-Cookies (optional)</p>
                      <p className="text-gray-400 text-xs mt-1">
                        <strong>Zweck:</strong> Verbesserung der Website durch Nutzungsanalyse<br />
                        <strong>Status:</strong> Aktuell nicht aktiv<br />
                        <strong>Hinweis:</strong> Derzeit werden keine Analyse-Tools verwendet
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen
                im Footer dieser Website aufrufen oder Ihren Browser-Cache löschen.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
