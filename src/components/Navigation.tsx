'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-red-700 leading-none">
                  Teppichhaus
                </span>
                <span className="text-sm text-gray-600 leading-none">
                  am Dornbusch
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-700 transition">
              Start
            </Link>
            <Link href="/verkauf" className="text-gray-700 hover:text-red-700 transition">
              Verkauf
            </Link>
            <Link href="/ankauf" className="text-gray-700 hover:text-red-700 transition">
              Ankauf
            </Link>
            <Link href="/waesche" className="text-gray-700 hover:text-red-700 transition">
              Teppichwäsche
            </Link>
            <Link href="/reparatur" className="text-gray-700 hover:text-red-700 transition">
              Reparatur
            </Link>
            <Link href="/kontakt" className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition">
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-700 focus:outline-none"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md">
              Start
            </Link>
            <Link href="/verkauf" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md">
              Verkauf
            </Link>
            <Link href="/ankauf" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md">
              Ankauf
            </Link>
            <Link href="/waesche" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md">
              Teppichwäsche
            </Link>
            <Link href="/reparatur" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md">
              Reparatur
            </Link>
            <Link href="/kontakt" className="block px-3 py-2 text-white bg-red-700 hover:bg-red-800 rounded-md">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
