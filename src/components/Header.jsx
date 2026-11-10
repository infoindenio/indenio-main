import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { categories, getService, waLink } from "../data/site";

const LOGO = "/assets/img/indenio-logo.webp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const servicesActive = pathname.startsWith("/service");

  return (
    <>
      <header className={`header${scrolled || open ? " scrolled" : ""}`}>
        <div className="container">
          <Link to="/" className="logo" aria-label="Indenio home">
            <img src={LOGO} alt="Indenio" width="156" height="42" />
          </Link>

          <nav className="nav" aria-label="Main">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <div className={`nav-drop${servicesActive ? " active" : ""}`}>
              <button aria-haspopup="true">Services <i className="bi bi-chevron-down" /></button>
              <div className="mega">
                {categories.map((c) => (
                  <div key={c.slug}>
                    <h6>{c.title}</h6>
                    {c.services.map((slug) => {
                      const s = getService(slug);
                      return (
                        <Link key={slug} to={s.path}>
                          <i className={`bi ${s.icon}`} />
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <NavLink to="/project">Portfolio</NavLink>
            <NavLink to="/ourprocess">Process</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="header-cta">
            <a className="btn btn-ghost btn-sm" href={waLink()} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp" /> WhatsApp
            </a>
            <Link className="btn btn-mint btn-sm" to="/contact">Let's Talk</Link>
            <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
              <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <Link to="/" style={{ transitionDelay: ".05s" }}>Home</Link>
        <Link to="/about" style={{ transitionDelay: ".1s" }}>About</Link>
        <Link to="/service" style={{ transitionDelay: ".15s" }}>Services</Link>
        <div className="sub">
          {categories.flatMap((c) => c.services).map((slug, i) => {
            const s = getService(slug);
            return <Link key={slug} to={s.path} style={{ transitionDelay: `${0.18 + i * 0.03}s` }}>{s.title}</Link>;
          })}
        </div>
        <Link to="/project" style={{ transitionDelay: ".45s" }}>Portfolio</Link>
        <Link to="/ourprocess" style={{ transitionDelay: ".5s" }}>Process</Link>
        <Link to="/contact" style={{ transitionDelay: ".55s" }}>Contact</Link>
        <a className="btn btn-wa" href={waLink()} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp" /> Chat on WhatsApp
        </a>
      </div>
    </>
  );
}
