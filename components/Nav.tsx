'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { site, navLinks } from '@/content/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="/" className="nav-logo">
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
                <a
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <span className="nav-lang" title="Proximamente · Coming soon">EN</span>
            <a href="/contacto" className="nav-cta">Hablemos</a>
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
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li style={{ borderTop: '1px solid rgba(253,250,245,0.1)', marginTop: '12px', paddingTop: '12px' }}>
            <a href="/contacto">Contacto</a>
          </li>
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
