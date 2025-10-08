'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const galleryImages = [
  { src: '/img/gallery/gallery-01.jpeg', alt: 'Orientteppich 1' },
  { src: '/img/gallery/gallery-02.jpeg', alt: 'Orientteppich 2' },
  { src: '/img/gallery/gallery-03.jpeg', alt: 'Orientteppich 3' },
  { src: '/img/gallery/gallery-04.jpeg', alt: 'Orientteppich 4' },
  { src: '/img/gallery/gallery-05.jpeg', alt: 'Orientteppich 5' },
  { src: '/img/gallery/gallery-06.jpeg', alt: 'Orientteppich 6' },
  { src: '/img/gallery/gallery-07.jpeg', alt: 'Orientteppich 7' },
  { src: '/img/gallery/gallery-08.jpeg', alt: 'Orientteppich 8' },
  { src: '/img/gallery/gallery-09.jpeg', alt: 'Orientteppich 9' },
  { src: '/img/gallery/gallery-10.jpeg', alt: 'Orientteppich 10' },
  { src: '/img/gallery/gallery-11.jpeg', alt: 'Orientteppich 11' },
  { src: '/img/gallery/gallery-12.jpeg', alt: 'Orientteppich 12' },
]

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string>('')

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null)
        setLightboxAlt('')
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src)
    setLightboxAlt(alt)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxAlt('')
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Unsere Teppich-Galerie
          </h2>
          <p className="text-lg text-gray-600">
            Einblicke in unsere vielfältige Auswahl an Orientteppichen und Perserteppichen
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(image.src, image.alt)}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition z-10"
              aria-label="Schließen"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={lightboxImage}
                alt={lightboxAlt}
                width={1200}
                height={900}
                className="max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
