'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Teppich } from '@/types/teppich'

interface TeppichDetailClientProps {
  teppich: Teppich
}

export default function TeppichDetailClient({ teppich }: TeppichDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Ich interessiere mich für den Teppich "${teppich.name}" (${teppich.id}).`,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // ESC-Taste zum Schließen der Lightbox
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    if (lightboxOpen) {
      window.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [lightboxOpen])

  // Navigation in Lightbox
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % teppich.bilder.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + teppich.bilder.length) % teppich.bilder.length)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/anfrage-teppich', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          teppichId: teppich.id,
          teppichName: teppich.name,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: `Ich interessiere mich für den Teppich "${teppich.name}" (${teppich.id}).`
        })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Ein Fehler ist aufgetreten')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
    }
  }

  return (
    <div>
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            aria-label="Schließen"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          {teppich.bilder.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition z-10"
                aria-label="Vorheriges Bild"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition z-10"
                aria-label="Nächstes Bild"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Lightbox Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4 animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={teppich.bilder[currentImageIndex]}
              alt={`${teppich.name} - Bild ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image Counter */}
          {teppich.bilder.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              {currentImageIndex + 1} / {teppich.bilder.length}
            </div>
          )}
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-cream py-4 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/angebote" className="hover:text-burgundy transition-colors">
              Angebote
            </Link>
            <span className="mx-2 text-gold">›</span>
            <span className="text-gray-900 font-medium">{teppich.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div
                className="relative h-96 sm:h-[500px] bg-gray-100 rounded-xl overflow-hidden mb-4 cursor-zoom-in group shadow-lg"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={teppich.bilder[currentImageIndex]}
                  alt={`${teppich.name} - Handgeknüpfter Orientteppich aus ${teppich.herkunft}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Zoom Indicator */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Vergrößern
                </div>
              </div>

              {teppich.bilder.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {teppich.bilder.map((bild, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        currentImageIndex === index
                          ? 'border-gold ring-2 ring-gold/30'
                          : 'border-gray-200 hover:border-gold/50'
                      }`}
                    >
                      <Image
                        src={bild}
                        alt={`${teppich.name} Vorschau ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 25vw, 10vw"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {teppich.name}
              </h1>

              <div className="text-3xl font-bold text-gold-dark mb-6">
                €{teppich.preis.toLocaleString('de-DE')}
              </div>

              <div className="bg-cream rounded-xl p-6 mb-6 border border-gold/20">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Produktdetails</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Herkunft</p>
                    <p className="font-semibold text-gray-900">
                      {teppich.herkunft}
                      {teppich.region && ` (${teppich.region})`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Größe</p>
                    <p className="font-semibold text-gray-900">{teppich.groesse}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Alter</p>
                    <p className="font-semibold text-gray-900">{teppich.alter}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Zustand</p>
                    <p className="font-semibold text-gray-900">{teppich.zustand}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Material</p>
                    <p className="font-semibold text-gray-900">{teppich.material}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Knüpfung</p>
                    <p className="font-semibold text-gray-900">{teppich.knuepfung}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Beschreibung</h3>
                <p className="text-gray-700 leading-relaxed">{teppich.beschreibung}</p>
              </div>

              {teppich.besonderheiten && (
                <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-xl p-4 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Besonderheiten
                  </h3>
                  <p className="text-gray-700">{teppich.besonderheiten}</p>
                </div>
              )}

              {/* Call to Action */}
              <div className="border-t border-gray-200 pt-6">
                <a
                  href="tel:069232581"
                  className="w-full bg-burgundy text-white px-8 py-4 rounded-lg font-semibold hover:bg-burgundy-dark transition-all duration-300 flex items-center justify-center gap-2 mb-3 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Jetzt anrufen: 069 - 232 581
                </a>
                <p className="text-sm text-gray-500 text-center">
                  oder nutzen Sie das Anfrageformular weiter unten
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-cream rounded-xl shadow-lg p-8 border border-gold/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Anfrage zu diesem Teppich
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold bg-white transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold bg-white transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold bg-white transition-colors"
                    placeholder="Ihre Telefonnummer (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold bg-white transition-colors resize-none"
                    placeholder="Ihre Nachricht..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gold hover:bg-gold-dark text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {status === 'loading' ? 'Wird gesendet...' : 'Anfrage senden'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Pflichtfelder
                </p>
              </form>
            </div>
          </div>

          {/* Back to Overview */}
          <div className="mt-12 text-center">
            <Link
              href="/angebote"
              className="inline-flex items-center text-burgundy hover:text-burgundy-dark font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
