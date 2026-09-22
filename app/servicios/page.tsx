import type { Metadata } from 'next'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { site, services } from '@/content/data'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Organizacion integral de bodas y eventos en Madrid. Desde la coordinacion completa hasta el acompanamiento el dia B. Adaptamos cada servicio a tu vision y presupuesto.',
}

const details = [
  {
    id: 'integral',
    includes: [
      'Primera reunion de valoracion sin compromiso',
      'Planificacion y gestion de presupuesto',
      'Seleccion y coordinacion de todos los proveedores',
      'Diseno floral y decorativo personalizado',
      'Gestion de invitaciones y seating',
      'Cronograma detallado del dia',
      'Coordinacion el dia de la boda',
      'Seguimiento post-evento',
    ],
    photo: '/photos/couple-celebration.jpg',
    photoAlt: 'Pareja celebrando el dia de su boda organizada por Parabatai Aurea',
    reverse: false,
  },
  {
    id: 'coordinacion',
    includes: [
      'Reunion previa de planificacion',
      'Gestion del cronograma del dia',
      'Coordinacion con todos los proveedores contratados',
      'Resolucion de imprevistos en tiempo real',
      'Presencia durante toda la celebracion',
      'Punto de contacto unico para proveedores',
    ],
    photo: '/photos/wedding-frozen.jpg',
    photoAlt: 'Boda coordinada por Parabatai Aurea con ambiente frozen y neon',
    reverse: true,
  },
  {
    id: 'eventos',
    includes: [
      'Diseno del concepto y tematica del evento',
      'Seleccion de espacio y proveedores',
      'Gestion de catering y entretenimiento',
      'Decoracion y ambientacion completa',
      'Coordinacion el dia del evento',
      'Adaptable a cualquier tipo de celebracion',
    ],
    photo: '/photos/decor-welcome.jpg',
    photoAlt: 'Decoracion para evento especial creada por Parabatai Aurea',
    reverse: false,
  },
  {
    id: 'decoracion',
    includes: [
      'Consultoria de estilo y concepto visual',
      'Propuestas de decoracion personalizadas',
      'Seleccion y montaje floral',
      'Elementos decorativos exclusivos',
      'Coordinacion con el espacio y otros proveedores',
      'Desmontaje incluido',
    ],
    photo: '/photos/bouquet.jpg',
    photoAlt: 'Ramo de novia con rosas blancas creado por Parabatai Aurea',
    reverse: true,
  },
]

const faqs = [
  {
    q: 'Con cuanta antelacion debo contactaros?',
    a: 'Lo ideal es entre 12 y 18 meses antes para la organizacion integral. Para coordinacion del dia B, entre 3 y 6 meses. Pero contactanos y valoramos tu caso aunque la fecha sea mas proxima.',
  },
  {
    q: 'Trabajais con cualquier presupuesto?',
    a: 'Si. Creemos que cada boda merece el mismo nivel de atencion. Adaptamos nuestra propuesta a tu presupuesto real, sin compromisos ocultos ni costes sorpresa.',
  },
  {
    q: 'Organizais bodas fuera de Madrid?',
    a: 'Principalmente trabajamos en Madrid y alrededores, aunque dependiendo del proyecto podemos desplazarnos. Consultanos y lo vemos juntos.',
  },
  {
    q: 'Puedo contratar solo parte de un servicio?',
    a: 'Si. Somos flexibles. Si ya tienes algunos proveedores cerrados y solo necesitas coordinacion, lo adaptamos a lo que realmente te sea util.',
  },
]

export default function ServiciosPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="wrap--narrow">
          <Reveal>
            <p className="eyebrow eyebrow--light">Lo que hacemos</p>
            <h1 className="page-hero-title">
              Nuestros<br /><em>servicios</em>
            </h1>
            <p className="page-hero-lead">
              Desde la organizacion completa hasta la coordinacion del gran dia.
              Cada servicio, pensado para que tu solo pienses en disfrutar.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Service detail rows */}
      {services.map((svc, idx) => {
        const detail = details.find(d => d.id === svc.id)
        if (!detail) return null
        return (
          <section
            key={svc.id}
            className="section"
            style={{ background: idx % 2 === 0 ? 'var(--ivory)' : 'var(--sand)' }}
          >
            <div className="wrap">
              <div
                className="about-split"
                style={{ direction: detail.reverse ? 'rtl' : 'ltr' }}
              >
                <Reveal>
                  <div className="about-image" style={{ direction: 'ltr' }}>
                    <Image
                      src={detail.photo}
                      alt={detail.photoAlt}
                      width={700}
                      height={880}
                      style={{ width: '100%', height: 'auto' }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Reveal>

                <div style={{ direction: 'ltr' }}>
                  <Reveal>
                    <p className="eyebrow" style={{ marginBottom: '16px' }}>
                      0{idx + 1}
                    </p>
                    <h2 className="about-title" style={{ marginTop: 0 }}>
                      {svc.title}
                    </h2>
                    <p className="about-text">{svc.description}</p>
                  </Reveal>
                  <Reveal delay={1}>
                    <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px', marginTop: '32px' }}>
                      Incluye
                    </p>
                    <div className="about-values">
                      {detail.includes.map((item, i) => (
                        <p key={i} className="about-value">{item}</p>
                      ))}
                    </div>
                  </Reveal>
                  <Reveal delay={2}>
                    <div style={{ marginTop: '40px' }}>
                      <a href="/contacto" className="btn btn-amber">Pedir presupuesto</a>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* FAQs */}
      <section className="section section--dark">
        <div className="wrap--narrow">
          <Reveal>
            <div className="section-header section-header--center">
              <p className="eyebrow eyebrow--light">Preguntas frecuentes</p>
              <h2 className="section-heading section-heading--light">Todo lo que quieres saber</h2>
            </div>
          </Reveal>

          <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <details
                  style={{
                    borderBottom: '1px solid var(--line-dark)',
                    paddingBottom: '0',
                  }}
                >
                  <summary
                    style={{
                      padding: '28px 0',
                      fontFamily: 'var(--serif)',
                      fontSize: '22px',
                      fontWeight: 400,
                      color: 'var(--ivory)',
                      cursor: 'pointer',
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                    }}
                  >
                    {faq.q}
                    <span style={{ color: 'var(--amber-light)', fontSize: '20px', flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ paddingBottom: '28px', fontSize: '15px', color: 'rgba(253,250,245,0.6)', lineHeight: '1.75' }}>
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow">Siguiente paso</p>
            <h2 className="section-heading" style={{ marginTop: '16px', marginBottom: '20px' }}>
              Lista para conocernos?
            </h2>
            <p className="section-lead" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
              Primera consulta sin compromiso. Cuentanos tu boda y encontramos
              el servicio que mejor se adapta a ti.
            </p>
            <a href="/contacto" className="btn btn-amber">Contactar ahora</a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
