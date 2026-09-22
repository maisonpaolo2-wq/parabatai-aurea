import type { Metadata } from 'next'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import { portfolio, site } from '@/content/data'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: `Galeria de bodas y eventos organizados por ${site.name} en Madrid. Bodas al aire libre, bodas de invierno, decoracion floral y mucho mas.`,
}

const categories = [
  { label: 'Todas', items: portfolio },
]

export default function PortfolioPage() {
  const allImages = portfolio.map(p => p.src)
  const allAlts = portfolio.map(p => p.alt)

  return (
    <main>
      <div className="page-hero">
        <div className="wrap--narrow">
          <Reveal>
            <p className="eyebrow eyebrow--light">Nuestro trabajo</p>
            <h1 className="page-hero-title">
              Momentos que<br /><em>hemos vivido</em>
            </h1>
            <p className="page-hero-lead">
              Cada boda es unica. Aqui puedes ver algunos de los momentos
              que hemos tenido el honor de organizar y vivir junto a nuestras parejas.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Masonry full portfolio */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="masonry">
              {portfolio.map((item, i) => (
                <div key={item.src} className="masonry-item">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={700}
                    height={item.weight === 'tall' ? 900 : 560}
                    style={{ width: '100%', height: 'auto' }}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="masonry-label">{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery with lightbox */}
      <section className="section section--sand">
        <div className="wrap">
          <Reveal>
            <div className="section-header section-header--center">
              <p className="eyebrow">Galeria completa</p>
              <h2 className="section-heading">Todos los detalles</h2>
              <p className="section-lead" style={{ margin: '12px auto 0', textAlign: 'center' }}>
                Haz clic en cualquier foto para verla a pantalla completa.
              </p>
            </div>
          </Reveal>
          <div style={{ marginTop: '52px' }}>
            <Reveal delay={1}>
              <Gallery
                images={allImages}
                alts={allAlts}
                aspectRatio="1/1"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow">Tu boda</p>
            <h2 className="section-heading" style={{ marginTop: '16px', marginBottom: '20px' }}>
              La proxima historia<br />podria ser la tuya
            </h2>
            <p className="section-lead" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
              Cuentanos tu vision y empezamos a disenas juntos el dia mas importante de tu vida.
            </p>
            <a href="/contacto" className="btn btn-amber">Hablar con nosotras</a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
