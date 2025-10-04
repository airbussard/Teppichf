'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface UploadedImage {
  data: string
  type: string
  name: string
}

export default function Ankauf() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  })
  const [images, setImages] = useState<UploadedImage[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileSelect = async (files: FileList | null) => {
    if (!files) return

    const newImages: UploadedImage[] = []
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']

    for (let i = 0; i < Math.min(files.length, 5 - images.length); i++) {
      const file = files[i]

      if (!allowedTypes.includes(file.type)) {
        setErrorMessage('Nur JPG, JPEG und PNG Dateien sind erlaubt.')
        continue
      }

      if (file.size > maxSize) {
        setErrorMessage('Dateien dürfen maximal 5MB groß sein.')
        continue
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          newImages.push({
            data: e.target.result as string,
            type: file.type,
            name: file.name,
          })
          if (newImages.length === files.length || images.length + newImages.length >= 5) {
            setImages([...images, ...newImages])
          }
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/ankauf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          images,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', description: '' })
        setImages([])
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Ein Fehler ist aufgetreten')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Teppichankauf
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto">
            Wir kaufen Ihre Orientteppiche und Perserteppiche zu fairen Preisen an
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Verkaufen Sie Ihre Teppiche
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Sie möchten sich von einem oder mehreren Orientteppichen trennen? Wir sind an
                hochwertigen Perserteppichen und anderen Orientteppichen interessiert und bieten
                Ihnen faire Ankaufspreise.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Mit unserer langjährigen Erfahrung bewerten wir Ihre Teppiche fachgerecht und
                machen Ihnen ein attraktives Angebot. Der gesamte Prozess ist unkompliziert
                und transparent.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wir kaufen an:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Perserteppiche aller Art</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Orientteppiche aus verschiedenen Regionen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Antike und moderne Teppiche</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Nachlässe und Sammlungen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              So funktioniert der Ankauf
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Kontakt</h3>
                <p className="text-gray-600">
                  Senden Sie uns Fotos und Informationen über das Formular
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Begutachtung</h3>
                <p className="text-gray-600">
                  Wir begutachten Ihren Teppich vor Ort oder in unserem Geschäft
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Angebot</h3>
                <p className="text-gray-600">
                  Sie erhalten ein faires und transparentes Ankaufsangebot
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Abwicklung</h3>
                <p className="text-gray-600">
                  Bei Annahme erfolgt die Bezahlung sofort in bar
                </p>
              </div>
            </div>
          </div>

          {/* Ankauf Form */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Senden Sie uns Fotos Ihrer Teppiche
            </h2>
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Beschreibung des Teppichs *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent resize-none"
                    placeholder="Größe, Herkunft, Zustand, Alter etc..."
                  ></textarea>
                </div>

                {/* Drag & Drop Zone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fotos hochladen (bis zu 5 Bilder)
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
                      isDragging
                        ? 'border-red-700 bg-red-50'
                        : 'border-gray-300 hover:border-red-700 hover:bg-gray-100'
                    }`}
                  >
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-semibold text-red-700">Klicken zum Hochladen</span> oder
                      Dateien hierher ziehen
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      JPG, JPEG, PNG bis zu 5MB pro Bild
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png"
                    multiple
                    onChange={(e) => handleFileSelect(e.target.files)}
                    className="hidden"
                  />
                </div>

                {/* Image Previews */}
                {images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <div className="relative h-24 rounded-lg overflow-hidden border-2 border-gray-300">
                          <Image
                            src={image.data}
                            alt={`Vorschau ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-700 text-white rounded-full p-1 hover:bg-red-800 transition"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns zeitnah bei Ihnen.
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

          {/* Contact Info Banner */}
          <div className="bg-red-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Möchten Sie uns Ihre Teppiche verkaufen?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nutzen Sie das Formular oben oder rufen Sie uns direkt an für eine schnelle Bewertung
            </p>
            <a
              href="tel:069232581"
              className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition text-xl"
            >
              069 - 232 581
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
