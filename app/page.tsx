'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import Lightbox from '@/components/Lightbox'
import { site, services, steps, portfolio, testimonials, stats } from '@/content/data'

const MARQUEE_WORDS = [
  'Bodas', 'Eventos', 'Celebraciones', 'Madrid',
  'Amor', 'Detalle', 'Emociones', 'Recuerdos',
  'Bodas', 'Eventos', 'Celebraciones', 'Madrid',
  'Amor', 'Detalle', 'Emociones', 'Recuerdos',
]

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const portfolioImages = portfolio.map(p => p.src)
  const portfolioAlts = portfolio.map(p => p.alt)
  const t = testimonials[testimonialIdx]

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-content">
          <Reveal>
            <p className="eyebrow hero-eyebrow">{site.location} · Wedding &amp; Event Planner</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="hero-title">
              Tu boda.<br />
              Tu historia.<br />
              <em>Nuestro arte.</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="hero-lead">
              Organizamos bodas y eventos en Madrid con un cuidado especial
              en cada detalle. Porque cada celebracion merece ser unica,
              cercana y completamente tuya.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero-actions">
              <a href="/contacto" className="btn btn-amber">Cuéntanos tu boda</a>
              <a href="/portfolio" className="link-arrow">Ver nuestro trabajo</a>
            </div>
          </Reveal>
        </div>

        <div className="hero-image">
          <Image
            src="/photos/ceremony-sunflowers.jpg"
            alt="Ceremonia de boda al aire libre con decoracion de girasoles en Madrid"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {MARQUEE_WORDS.map((word, i) => (
            <span key={i} className="marquee-item">
              {word}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Intro + Stats + Filmstrip ─────────────────── */}
      <section className="section">
        <div className="wrap--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow">Quienes somos</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="intro-heading">
              Somos Parabatai Aurea.<br />
              <em>Organizamos con el corazon.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="intro-lead">
              Nuestro nombre significa "luchadores juntos". Estar a tu lado en cada paso,
              con cercania real y una atencion al detalle que lo transforma todo.
            </p>
          </Reveal>
        </div>

        <div className="wrap">
          <Reveal delay={1}>
            <div className="stats-row">
              {stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <p className="stat-num">{s.num}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="filmstrip" style={{ marginTop: '72px' }}>
              {[portfolio[0], portfolio[2], portfolio[4]].filter(Boolean).map((item) => (
                <div key={item.src} className="filmstrip-item">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="filmstrip-caption">{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div style={{ textAlign: 'center', marginTop: '52px' }}>
              <a href="/sobre-nosotras" className="link-arrow">Conocenos mejor</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────── */}
      <section className="section section--sand">
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Lo que hacemos</p>
              <h2 className="section-heading">Nuestros servicios</h2>
              <p className="section-lead">
                Desde la organizacion completa hasta la coordinacion del gran dia.
                Cada servicio, adaptado a lo que realmente necesitas.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2 + 1) as 1 | 2}>
                <div className="service-card">
                  <ServiceIcon name={s.icon} />
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div style={{ textAlign: 'center', marginTop: '52px' }}>
              <a href="/servicios" className="btn btn-outline">Ver todos los servicios</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────── */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal>
            <div className="section-header section-header--center">
              <p className="eyebrow eyebrow--light">Como trabajamos</p>
              <h2 className="section-heading section-heading--light">Del primer cafe al ultimo baile</h2>
            </div>
          </Reveal>

          <div className="process-steps">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <div className="process-step">
                  <p className="process-num">{step.num}</p>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Nuestro trabajo</p>
              <h2 className="section-heading">Momentos que hemos vivido</h2>
            </div>
          </Reveal>

          <div className="masonry">
            {portfolio.map((item, i) => (
              <Reveal key={item.src} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <div
                  className="masonry-item"
                  onClick={() => setLightboxIdx(i)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={item.weight === 'tall' ? 820 : 520}
                    style={{ width: '100%', height: 'auto' }}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="masonry-label">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div style={{ textAlign: 'center', marginTop: '52px' }}>
              <a href="/portfolio" className="link-arrow">Ver portfolio completo</a>
            </div>
          </Reveal>
        </div>

        {lightboxIdx !== null && (
          <Lightbox
            images={portfolioImages}
            alts={portfolioAlts}
            index={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
            onPrev={() => setLightboxIdx(i => (i === null ? 0 : (i - 1 + portfolioImages.length) % portfolioImages.length))}
            onNext={() => setLightboxIdx(i => (i === null ? 0 : (i + 1) % portfolioImages.length))}
          />
        )}
      </section>

      {/* ── MANIFESTO (WOW) ──────────────────────────── */}
      <section className="manifesto">
        <div className="manifesto-ornament">✦</div>
        <div className="manifesto-inner">
          <Reveal>
            <p className="eyebrow eyebrow--light" style={{ marginBottom: '32px' }}>Nuestra filosofia</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="manifesto-title">
              Porque cada<br />
              <em>detalle importa.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="manifesto-line" />
            <p className="manifesto-sub">
              Cada flor elegida con cuidado. Cada momento coordinado en silencio.
              Cada sorpresa preparada con amor. Eso es lo que hacemos nosotras.
              No solo organizamos bodas. Creamos recuerdos para toda la vida.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a href="/contacto" className="btn btn-outline-light">Hablamos sin compromiso</a>
          </Reveal>
        </div>
      </section>

      {/* ── Nosotras ─────────────────────────────────── */}
      <section className="section section--sand">
        <div className="wrap">
          <div className="about-split">
            <Reveal>
              <div className="about-image">
                <Image
                  src="/photos/decor-welcome.jpg"
                  alt="Decoracion de boda personalizada por Parabatai Aurea, columnas con velas y bienvenida"
                  width={700}
                  height={920}
                  style={{ width: '100%', height: 'auto' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow">Sobre nosotras</p>
                <h2 className="about-title">
                  Cercanas,<br />
                  detallistas<br />
                  <em>y apasionadas.</em>
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="about-text">
                  Somos un estudio de organizacion de bodas y eventos con sede en Madrid.
                  Creemos que cada celebracion, sin importar el presupuesto, merece el mismo
                  nivel de atencion y cuidado.
                </p>
                <p className="about-text">
                  Nos especializamos en que cada pareja se sienta escuchada, tranquila y
                  libre para disfrutar del dia mas importante de su vida.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <div className="about-values">
                  <p className="about-value">Organizacion meticulosa en cada detalle</p>
                  <p className="about-value">Presupuestos adaptados a cada familia</p>
                  <p className="about-value">Trato cercano y personal desde el dia 1</p>
                  <p className="about-value">Presencia total el dia de vuestra boda</p>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div style={{ marginTop: '40px' }}>
                  <a href="/sobre-nosotras" className="btn btn-outline">Conocenos mejor</a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-header section-header--center">
              <p className="eyebrow">Lo que dicen</p>
              <h2 className="section-heading">Parejas que confiaron en nosotras</h2>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="testimonial-wrap" style={{ marginTop: '60px' }}>
              <p className="testimonial-quote">{t.quote}</p>
              <p className="testimonial-author">{t.author}</p>
              <p className="testimonial-date">{t.date}</p>
              <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonial-dot${i === testimonialIdx ? ' active' : ''}`}
                    onClick={() => setTestimonialIdx(i)}
                    aria-label={`Testimonio ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section id="contacto">
        <div className="contact-grid">
          <div className="contact-info">
            <Reveal>
              <p className="eyebrow eyebrow--light">Contacto</p>
              <h2 className="contact-info-title">Hablemos de tu boda</h2>
              <p className="contact-info-lead">
                Respondemos en menos de 24 horas. Cuentanos tu idea
                y valoramos como podemos ayudarte.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="contact-details">
                <div className="contact-detail">
                  <span className="contact-detail-label">Email</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail-label">Telefono y WhatsApp</span>
                  <a href={`tel:${site.phone}`}>{site.phone}</a>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail-label">Ubicacion</span>
                  <span>{site.location}</span>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail-label">Instagram</span>
                  <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                    @{site.instagram}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="contact-form-panel">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    rings: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="17" cy="24" r="10" />
        <circle cx="31" cy="24" r="10" />
      </svg>
    ),
    calendar: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="10" width="36" height="32" rx="2" />
        <line x1="6" y1="20" x2="42" y2="20" />
        <line x1="16" y1="6" x2="16" y2="14" />
        <line x1="32" y1="6" x2="32" y2="14" />
        <rect x="14" y="26" width="6" height="6" rx="1" />
        <rect x="28" y="26" width="6" height="6" rx="1" />
      </svg>
    ),
    star: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="24,6 29,18 42,18 32,26 36,38 24,30 12,38 16,26 6,18 19,18" />
      </svg>
    ),
    flower: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="4" />
        <ellipse cx="24" cy="12" rx="3.5" ry="7" />
        <ellipse cx="24" cy="36" rx="3.5" ry="7" />
        <ellipse cx="12" cy="24" rx="7" ry="3.5" />
        <ellipse cx="36" cy="24" rx="7" ry="3.5" />
        <ellipse cx="15.5" cy="15.5" rx="3.5" ry="7" transform="rotate(-45 15.5 15.5)" />
        <ellipse cx="32.5" cy="32.5" rx="3.5" ry="7" transform="rotate(-45 32.5 32.5)" />
      </svg>
    ),
  }
  return <>{icons[name] ?? null}</>
}
