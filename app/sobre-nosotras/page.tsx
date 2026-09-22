import type { Metadata } from 'next'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { site, testimonials } from '@/content/data'

export const metadata: Metadata = {
  title: 'Sobre nosotras',
  description: `Conoce a ${site.name}, estudio de organizacion de bodas y eventos en Madrid. Cercanas, detallistas y apasionadas por hacer realidad vuestra historia.`,
}

const values = [
  {
    icon: '✦',
    title: 'Cercanía real',
    desc: 'No somos un servicio mas. Somos las personas que van a estar a tu lado en el dia mas importante de tu vida. Eso implica escuchar, entender y acompanar de verdad.',
  },
  {
    icon: '◈',
    title: 'Atencion al detalle',
    desc: 'Cada elemento cuenta. Desde la disposicion de las flores hasta el orden de las canciones. Nada es demasiado pequeno para que lo revisemos.',
  },
  {
    icon: '◇',
    title: 'Presupuesto honesto',
    desc: 'Creemos que una boda bonita no necesita ser cara. Trabajamos con transparencia total para que cada euro este bien invertido.',
  },
  {
    icon: '○',
    title: 'Presencia total',
    desc: 'El dia de tu boda estamos ahi, de principio a fin. Para que tu y tu familia podais despreocuparos y simplemente disfrutar.',
  },
]

export default function SobreNosotrasPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="wrap--narrow">
          <Reveal>
            <p className="eyebrow eyebrow--light">Quienes somos</p>
            <h1 className="page-hero-title">
              Somos<br /><em>Parabatai Aurea</em>
            </h1>
            <p className="page-hero-lead">
              Un estudio de organizacion de bodas y eventos en Madrid. Cercanas,
              detallistas y absolutamente apasionadas por lo que hacemos.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Split story */}
      <section className="section">
        <div className="wrap">
          <div className="about-split">
            <Reveal>
              <div className="about-image">
                <Image
                  src="/photos/wedding-frozen.jpg"
                  alt="Boda organizada por Parabatai Aurea con decoracion de invierno y neon Si quiero"
                  width={700}
                  height={900}
                  style={{ width: '100%', height: 'auto' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow">Nuestra historia</p>
                <h2 className="about-title">
                  El nombre<br />lo dice todo.<br />
                  <em>Luchadores juntos.</em>
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="about-text">
                  Parabatai es una palabra que significa "luchadores que combaten juntos, cuya
                  confianza es absoluta y cuyo vinculo es eterno". Eso es exactamente lo que
                  queremos ser para cada pareja con la que trabajamos.
                </p>
                <p className="about-text">
                  Nacimos con la conviccion de que organizar una boda no tiene que ser una
                  experiencia estresante. Con la persona adecuada a tu lado, puede ser uno
                  de los procesos mas bonitos y emocionantes de tu vida.
                </p>
                <p className="about-text">
                  Trabajamos en Madrid y organizamos bodas de todos los estilos: romanticas,
                  rusticas, bohemias, minimalistas, tematicas. Lo que importa es que sea
                  completamente vuestra.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="section section--sand">
        <div className="wrap">
          <Reveal>
            <div className="section-header section-header--center">
              <p className="eyebrow">Lo que nos mueve</p>
              <h2 className="section-heading">Nuestros valores</h2>
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2px',
              marginTop: '60px',
            }}
          >
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2 + 1) as 1 | 2}>
                <div
                  className="service-card"
                  style={{ background: 'var(--sand)' }}
                >
                  <p style={{ fontSize: '28px', color: 'var(--amber)', marginBottom: '20px', fontFamily: 'var(--serif)' }}>
                    {v.icon}
                  </p>
                  <h3 className="service-title">{v.title}</h3>
                  <p className="service-desc">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Second split with different photo */}
      <section className="section">
        <div className="wrap">
          <div className="about-split" style={{ direction: 'rtl' }}>
            <Reveal>
              <div className="about-image" style={{ direction: 'ltr' }}>
                <Image
                  src="/photos/bouquet.jpg"
                  alt="Ramo de novia con rosas blancas y flores silvestres, detalle de boda"
                  width={700}
                  height={900}
                  style={{ width: '100%', height: 'auto' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <div style={{ direction: 'ltr' }}>
              <Reveal>
                <p className="eyebrow">Como trabajamos</p>
                <h2 className="about-title">
                  Sin prisas,<br />sin estres,<br />
                  <em>con amor.</em>
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="about-text">
                  Empezamos por escucharte. De verdad. No hay plantillas ni procesos rigidos.
                  Cada boda empieza de cero porque cada pareja es diferente.
                </p>
                <p className="about-text">
                  Trabajamos contigo durante todo el proceso, adaptandonos a tu ritmo y a tus
                  necesidades. Estamos aqui para acompanarte, no para imponerte nada.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <div className="about-values">
                  <p className="about-value">Primera reunion siempre sin compromiso</p>
                  <p className="about-value">Comunicacion abierta y fluida</p>
                  <p className="about-value">Propuestas adaptadas, nunca estandar</p>
                  <p className="about-value">Acompanamiento hasta el ultimo baile</p>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div style={{ marginTop: '40px' }}>
                  <a href="/contacto" className="btn btn-amber">Quiero conoceros</a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal>
            <div className="section-header section-header--center">
              <p className="eyebrow eyebrow--light">Lo que dicen</p>
              <h2 className="section-heading section-heading--light">Ellas lo cuentan mejor que nosotras</h2>
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: '60px',
            }}
          >
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  style={{
                    background: 'rgba(253,250,245,0.04)',
                    border: '1px solid var(--line-dark)',
                    padding: '40px 32px',
                    borderRadius: '2px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '18px',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      color: 'rgba(253,250,245,0.85)',
                      lineHeight: 1.65,
                      marginBottom: '28px',
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--amber-light)' }}>
                    {t.author}
                  </p>
                  <p style={{ fontSize: '12px', color: 'rgba(253,250,245,0.35)', marginTop: '4px' }}>
                    {t.date}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow">Empezamos?</p>
            <h2 className="section-heading" style={{ marginTop: '16px', marginBottom: '20px' }}>
              Tu historia merece<br />a las personas correctas
            </h2>
            <p className="section-lead" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
              Primera consulta sin coste ni compromiso. Cuentanos tu boda y vemos juntos si conectamos.
            </p>
            <a href="/contacto" className="btn btn-amber">Pedir primera reunion</a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
