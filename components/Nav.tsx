'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { site, navLinks } from '@/content/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const navClass = ['nav', scrolled ? 'scrolled' : 'light'].join(' ')

  return (
    <>
      <nav className={navClass}>
        <div className="nav-inner">
          <a href="/" className="nav-logo" onClick={close}>
            <div className="nav-logo-img">
              <Image
                src="/photos/logo.jpg"
                alt={`Logo ${site.name}`}
                width={44}
                height={44}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <span className="nav-logo-text">{site.name}</span>
          </a>

          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <span className="nav-lang" title="Proximamente · Coming soon">EN</span>
            <a href="#contacto" className="nav-cta">Hablemos</a>
            <button
              className={`burger${open ? ' open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <ul className="drawer-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>{link.label}</a>
            </li>
          ))}
        </ul>
        <span className="drawer-lang">EN · Proximamente</span>
        <div className="drawer-contact">
          <a href={`tel:${site.phone}`} style={{ color: 'rgba(253,250,245,0.5)', fontSize: '14px' }}>
            {site.phone}
          </a>
        </div>
      </div>
    </>
  )
}
