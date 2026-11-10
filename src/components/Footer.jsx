import { Link } from "react-router-dom";
import { contact, services, waLink } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo">
              <img src="/assets/img/indenio-logo.webp" alt="Indenio" width="170" height="46" loading="lazy" />
            </Link>
            <p>Indenio builds custom websites and online stores, ranks them on Google and runs marketing that brings real enquiries for businesses in the UK, USA, Norway, Australia and Pakistan.</p>
            <div className="socials" style={{ marginTop: 22 }}>
              {contact.social.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/project">Portfolio</Link></li>
              <li><Link to="/ourprocess">Our Process</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}><Link to={s.path}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <div className="fc"><i className="bi bi-whatsapp" /><a href={waLink()} target="_blank" rel="noopener noreferrer">{contact.whatsapp}</a></div>
            <div className="fc"><i className="bi bi-envelope" /><div><a href={`mailto:${contact.email}`}>{contact.email}</a><br /><a href={`mailto:${contact.email2}`}>{contact.email2}</a></div></div>
            <div className="fc"><i className="bi bi-geo-alt" /><p>{contact.address}</p></div>
          </div>
        </div>
      </div>
      <div className="footer-big" aria-hidden="true">INDENIO</div>
      <div className="container">
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Indenio. All rights reserved.</span>
          <div>
            <Link to="/termcondition">Terms &amp; Conditions</Link>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
