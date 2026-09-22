import { site, navLinks } from '@/content/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-brand-name">{site.name}</p>
            <p className="footer-brand-tagline">
              Wedding &amp; Event Planner · {site.location}
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-ig-link"
            >
              @{site.instagram}
            </a>
          </div>

          <div>
            <p className="footer-col-title">Navegacion</p>
            <ul className="footer-links">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Contacto</p>
            <div className="footer-contact-item">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="footer-contact-item">
              <a href={`tel:${site.phone}`}>{site.phone}</a>
            </div>
            <div className="footer-contact-item">
              <span>{site.location}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="footer-copy">{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
