'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface LightboxProps {
  images: string[]
  alts: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, alts, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-img" onClick={e => e.stopPropagation()}>
        <Image
          src={images[index]}
          alt={alts[index]}
          width={1200}
          height={900}
          style={{ maxWidth: '90vw', maxHeight: '85vh', width: 'auto', height: 'auto', objectFit: 'contain' }}
        />
        <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">✕</button>
        {images.length > 1 && (
          <>
            <button className="lightbox-prev" onClick={onPrev} aria-label="Anterior">‹</button>
            <button className="lightbox-next" onClick={onNext} aria-label="Siguiente">›</button>
            <span className="lightbox-counter">{index + 1} / {images.length}</span>
          </>
        )}
      </div>
    </div>
  )
}
