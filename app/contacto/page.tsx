import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { site } from '@/content/data'

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacta con ${site.name} para organizar tu boda o evento en Madrid. Respondemos en menos de 24 horas.`,
}

export default function ContactoPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="wrap--narrow">
          <Reveal>
            <p className="eyebrow eyebrow--light">Escribenos</p>
            <h1 className="page-hero-title">
              Hablemos de<br /><em>tu boda</em>
            </h1>
            <p className="page-hero-lead">
              Primera consulta siempre sin compromiso. Cuentanos tu vision
              y buscamos juntos la mejor forma de hacerla realidad.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Main contact section */}
      <section className="contact-grid" style={{ minHeight: '680px' }}>
        <div className="contact-info">
          <Reveal>
            <p className="eyebrow eyebrow--light" style={{ marginBottom: '20px' }}>Datos de contacto</p>
            <h2 className="contact-info-title">Respondemos<br />en 24 horas</h2>
            <p className="contact-info-lead">
              Puedes escribirnos por el formulario, por email o directamente por WhatsApp.
              Nos adaptamos a como te resulte mas comodo.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-label">Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-label">Telefono</span>
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-label">WhatsApp</span>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-label">Instagram</span>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{site.instagram}
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-label">Ubicacion</span>
                <span>{site.location}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="contact-form-panel">
          <Reveal>
            <div style={{ width: '100%' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '28px', marginBottom: '32px', color: 'var(--ink)' }}>
                Cuentanos tu historia
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="section section--sand">
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
            }}
          >
            {[
              { label: 'Respuesta en', value: 'menos de 24h', sub: 'Siempre respondemos' },
              { label: 'Primera reunion', value: 'Sin coste', sub: 'Ni compromiso alguno' },
              { label: 'Ubicacion', value: 'Madrid', sub: 'y alrededores' },
            ].map((item, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '12px' }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '8px' }}>
                    {item.value}
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
                    {item.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
