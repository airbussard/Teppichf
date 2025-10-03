'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Cookie-Einstellungen</h3>
            <p className="text-sm text-gray-300">
              Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten.
              Einige Cookies sind für die Funktion der Website erforderlich, während andere uns helfen,
              die Website zu verbessern. Sie können Ihre Einstellungen jederzeit ändern.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={acceptNecessary}
              className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Nur Notwendige
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2 bg-red-700 rounded-lg hover:bg-red-800 transition"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
