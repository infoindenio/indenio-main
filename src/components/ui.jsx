import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { faqs as defaultFaqs, clientLogos, contact, waLink } from "../data/site";

// Section heading with eyebrow label
export function SectionHead({ eyebrow, title, text, center = false }) {
  return (
    <div className={`sec-head reveal${center ? " center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

// Number that counts up when it scrolls into view
export function Counter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1600;
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div className="stat reveal" ref={ref}>
      <strong>{n}<em>{suffix}</em></strong>
      <span>{label}</span>
    </div>
  );
}

// Accordion FAQ
export function Faq({ items = defaultFaqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((f, i) => (
        <div key={f.q} className={`faq-item reveal${open === i ? " open" : ""}`} style={{ "--d": `${i * 0.05}s` }}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {f.q}
            <i className="bi bi-plus-lg" />
          </button>
          <div className="faq-a"><div><p>{f.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}

// Infinite scrolling client logos
export function LogoMarquee() {
  const list = [...clientLogos, ...clientLogos];
  return (
    <div className="logos reveal">
      <div className="logos-track">
        {list.map((src, i) => (
          <div className="logo-tile" key={i}>
            <img src={src} alt="Client logo" loading="lazy" decoding="async" width="200" height="40" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Big mint call-to-action band
export function CtaBand({
  title = "Ready to grow your business online?",
  text = "Get a free consultation and a clear quote within 24 hours. WhatsApp is the fastest way to reach us.",
}) {
  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="cta-band reveal zoom">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="actions">
            <a className="btn btn-dark" href={waLink()} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp" /> Chat on WhatsApp
            </a>
            <Link className="btn btn-ghost" to="/contact" style={{ color: "#04130e", borderColor: "rgba(4,19,14,.35)" }}>
              Get a Free Quote <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Header used on every inner page
export function PageHero({ eyebrow, title, text, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="hero-bg">
        <div className="grid-bg" />
        <div className="blob b1" />
      </div>
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        <div className="crumbs">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} style={{ display: "contents" }}>
              <i className="bi bi-chevron-right" />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span className="text-mint">{c.label}</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactList() {
  return (
    <div className="info-list">
      <a className="info wa reveal" href={waLink()} target="_blank" rel="noopener noreferrer">
        <span className="ic"><i className="bi bi-whatsapp" /></span>
        <span><small>WhatsApp / Call</small><b>{contact.whatsapp}</b></span>
      </a>
      <a className="info reveal" href={`mailto:${contact.email}`} style={{ "--d": ".08s" }}>
        <span className="ic"><i className="bi bi-envelope" /></span>
        <span><small>Email</small><b>{contact.email}</b></span>
      </a>
      <div className="info reveal" style={{ "--d": ".16s" }}>
        <span className="ic"><i className="bi bi-geo-alt" /></span>
        <span><small>UK Office</small><b>{contact.address}</b></span>
      </div>
      <div className="socials reveal" style={{ "--d": ".24s" }}>
        {contact.social.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
            <i className={`bi ${s.icon}`} />
          </a>
        ))}
      </div>
    </div>
  );
}
