'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Teppich } from '@/types/teppich'
import { getTeppichById } from '@/lib/teppiche'

export default function TeppichDetail() {
  const params = useParams()
  const id = params.id as string

  const [teppich, setTeppich] = useState<Teppich | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    async function loadTeppich() {
      const data = await getTeppichById(id)
      setTeppich(data)

      if (data) {
        setFormData(prev => ({
          ...prev,
          message: `Ich interessiere mich für den Teppich "${data.name}" (${data.id}).`
        }))
      }
    }

    loadTeppich()
  }, [id])

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
          teppichId: teppich?.id,
          teppichName: teppich?.name,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: `Ich interessiere mich für den Teppich "${teppich?.name}" (${teppich?.id}).`
        })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Ein Fehler ist aufgetreten')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
    }
  }

  if (!teppich) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Teppich nicht gefunden</h2>
          <Link
            href="/angebote"
            className="text-red-700 hover:text-red-800 font-semibold"
          >
            ← Zurück zur Übersicht
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/angebote" className="hover:text-red-700">
              Angebote
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{teppich.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative h-96 sm:h-[500px] bg-gray-200 rounded-xl overflow-hidden mb-4">
                <Image
                  src={teppich.bilder[currentImageIndex]}
                  alt={`${teppich.name} - Bild ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {teppich.bilder.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {teppich.bilder.map((bild, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative h-20 rounded-lg overflow-hidden border-2 transition ${
                        currentImageIndex === index
                          ? 'border-red-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={bild}
                        alt={`Vorschau ${index + 1}`}
                        fill
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

              <div className="text-3xl font-bold text-red-700 mb-6">
                €{teppich.preis.toLocaleString('de-DE')}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Produktdetails</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Herkunft</p>
                    <p className="font-semibold text-gray-900">
                      {teppich.herkunft}
                      {teppich.region && ` (${teppich.region})`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Größe</p>
                    <p className="font-semibold text-gray-900">{teppich.groesse}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Alter</p>
                    <p className="font-semibold text-gray-900">{teppich.alter}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Zustand</p>
                    <p className="font-semibold text-gray-900">{teppich.zustand}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Material</p>
                    <p className="font-semibold text-gray-900">{teppich.material}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Knüpfung</p>
                    <p className="font-semibold text-gray-900">{teppich.knuepfung}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Beschreibung</h3>
                <p className="text-gray-700 leading-relaxed">{teppich.beschreibung}</p>
              </div>

              {teppich.besonderheiten && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Besonderheiten</h3>
                  <p className="text-gray-700">{teppich.besonderheiten}</p>
                </div>
              )}

              {/* Call to Action */}
              <div className="border-t border-gray-200 pt-6">
                <a
                  href="tel:069232581"
                  className="w-full bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition flex items-center justify-center gap-2 mb-3"
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
            <div className="bg-white rounded-xl shadow-lg p-8">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent resize-none"
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
                  className="w-full bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
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
              className="inline-flex items-center text-red-700 hover:text-red-800 font-semibold"
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
