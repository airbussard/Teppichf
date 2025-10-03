'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageCompareProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export default function ImageCompare({
  beforeImage,
  afterImage,
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher',
}: ImageCompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, bounds: DOMRect) => {
    const x = clientX - bounds.left
    const position = (x / bounds.width) * 100
    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const bounds = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, bounds)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const bounds = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, bounds)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  return (
    <div
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-2xl select-none cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base font-semibold">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-red-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base font-semibold">
          {beforeLabel}
        </div>
      </div>

      {/* Slider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  )
}
