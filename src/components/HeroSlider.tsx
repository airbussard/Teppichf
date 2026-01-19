'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    image: '/img/store/aussen_sehrgut.jpg',
    title: 'Ihr Spezialist für Orientteppiche in Frankfurt',
    subtitle: 'Verkauf, Ankauf, Reinigung und professionelle Reparatur von Perserteppichen'
  },
  {
    image: '/img/store/teppichinnen_schoen.jpg',
    title: 'Exquisite Teppichauswahl',
    subtitle: 'Handgeknüpfte Perserteppiche und Orientteppiche in großer Vielfalt'
  },
  {
    image: '/img/store/teppich2innen_gut.jpg',
    title: 'Qualität und Tradition',
    subtitle: 'Seit Jahren Ihr vertrauensvoller Partner für hochwertige Teppiche'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />

          {/* Premium Overlay - dramatischer Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 animate-fade-in-delay text-white/90">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-in-delay-2">
                <Link
                  href="/angebote"
                  className="bg-gold hover:bg-gold-dark text-gray-900 px-8 sm:px-10 py-4 rounded-lg font-semibold transition-all duration-300 text-center text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Teppiche ansehen
                </Link>
                <Link
                  href="/kontakt"
                  className="border-2 border-white/80 text-white px-8 sm:px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center text-lg backdrop-blur-sm"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots - mit Gold-Akzent */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gold w-10'
                : 'bg-white/50 hover:bg-white/75 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
