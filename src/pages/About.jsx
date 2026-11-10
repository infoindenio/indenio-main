import { Link } from "react-router-dom";
import { stats, reasons, projects, waLink } from "../data/site";
import { PageHero, SectionHead, Counter, LogoMarquee, CtaBand } from "../components/ui";

export default function About() {
  const results = [1, 3, 2, 14, 9, 13].map((id) => projects.find((p) => p.id === id));
  return (
    <>
      <PageHero
        eyebrow="About Indenio"
        title="A digital agency built around your growth"
        text="We design, build and market websites for businesses in the UK, USA, Norway, Australia and Pakistan."
        crumbs={[{ label: "About" }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Our story" title="Websites, SEO and marketing under one roof" />
            <div className="reveal">
              <p className="muted" style={{ fontSize: 17.5, marginBottom: 16 }}>
                Indenio builds custom websites, online stores and apps, gets them ranking on Google and runs marketing that brings in real enquiries. From a gym chain in Norway to solar companies in Australia and e-commerce brands in the UK, we help businesses look professional online and grow.
              </p>
              <p className="muted" style={{ fontSize: 17.5 }}>
                You work directly with the people designing, coding and marketing your project. No account managers in the middle, just fast replies on WhatsApp and clear progress at every step.
              </p>
            </div>
            <ul className="checks reveal">
              <li><i className="bi bi-check-lg" />Custom-built, never cookie-cutter templates</li>
              <li><i className="bi bi-check-lg" />SEO, speed and tracking built in from day one</li>
              <li><i className="bi bi-check-lg" />Support, security and growth long after launch</li>
            </ul>
            <div className="reveal" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn btn-wa" href={waLink()} target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp" /> Talk to us</a>
              <Link className="btn btn-ghost" to="/project">Our work <i className="bi bi-arrow-right" /></Link>
            </div>
          </div>
          <div className="visual reveal from-right" style={{ maxWidth: 480, justifySelf: "center" }}>
            <img src="/assets/svg/about.svg" alt="Website and client growth illustration" width="440" height="532" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="stats">{stats.map((s) => <Counter key={s.label} {...s} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="What we value" title="Why clients choose Indenio" />
          <div className="grid-4">
            {reasons.map((r, i) => (
              <div className="card reveal" key={r.title} style={{ "--d": `${i * 0.08}s` }}>
                <div className="ic"><i className={`bi ${r.icon}`} /></div>
                <h3 style={{ fontSize: 19 }}>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Client results" title="Real work for real businesses" />
          <div className="grid-3">
            {results.map((p, i) => (
              <div className="card result reveal" key={p.id} style={{ "--d": `${(i % 3) * 0.08}s` }}>
                <span className="country">{p.country}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <a className="link-arrow" href={p.link} target="_blank" rel="noopener noreferrer">Visit website <i className="bi bi-arrow-up-right" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container">
          <SectionHead center eyebrow="Brands we've worked with" title="Trusted by growing brands" />
        </div>
        <LogoMarquee />
      </section>

      <CtaBand />
    </>
  );
}
