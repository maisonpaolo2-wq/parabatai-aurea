'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

interface GalleryProps {
  images: string[]
  alts?: string[]
  aspectRatio?: string
}

export default function Gallery({ images, alts = [], aspectRatio = '3/4' }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => (i === null ? 0 : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIndex(i => (i === null ? 0 : (i + 1) % images.length))

  return (
    <>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div
            key={src}
            className="gallery-item"
            style={{ aspectRatio }}
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={src}
              alt={alts[i] ?? `Foto ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          alts={alts.length ? alts : images.map((_, i) => `Foto ${i + 1}`)}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
