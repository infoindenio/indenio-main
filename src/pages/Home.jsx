import { Link } from "react-router-dom";
import { stats, homeServices, projects, process, reasons, countries, waLink, getService } from "../data/site";
import { SectionHead, Counter, Faq, LogoMarquee, CtaBand } from "../components/ui";
import { ProjectGrid } from "../components/Projects";

const ticker = ["Web Development", "WooCommerce Stores", "SEO & Google Ranking", "Meta & Google Ads", "Social Media", "UI/UX Design", "Branding", "Mobile Apps"];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const results = [1, 3, 2, 14, 9, 13].map((id) => projects.find((p) => p.id === id));

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="grid-bg" />
          <div className="blob b1" />
          <div className="blob b2" />
        </div>
        <div className="container">
          <div>
            <span className="eyebrow" style={{ animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) both" }}>Web · SEO · Marketing Agency</span>
            <h1>
              <span className="line"><span style={{ "--d": ".1s" }}>Websites that</span></span>
              <span className="line"><span className="grad" style={{ "--d": ".22s" }}>win clients,</span></span>
              <span className="line"><span style={{ "--d": ".34s" }}>marketing that grows.</span></span>
            </h1>
            <p className="hero-lead">
              Indenio designs and builds custom websites and online stores, gets them ranking on Google and runs campaigns that turn visitors into real enquiries.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-wa" href={waLink("Hi Indenio, I'd like a free consultation.")} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp" /> Free Consultation
              </a>
              <Link className="btn btn-ghost" to="/project">See Our Work <i className="bi bi-arrow-right" /></Link>
            </div>
            <div className="hero-trust">
              <span>Trusted by businesses in</span>
              <div className="flags">{countries.map((c) => <span key={c}>{c}</span>)}</div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="frame">
              <img src="/assets/svg/hero.svg" alt="Website dashboard with growth chart" width="880" height="460" fetchpriority="high" />
            </div>
            <div className="chip c1"><i className="bi bi-graph-up-arrow" /><div>Ranking on Google<small>SEO built in</small></div></div>
            <div className="chip c2"><i className="bi bi-lightning-charge-fill" /><div>Fast &amp; mobile-first<small>Custom-built</small></div></div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* STATS */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="stats">
            {stats.map((s) => <Counter key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="sec-row">
            <SectionHead eyebrow="What we do" title="Everything you need to grow online" text="Hire us for one service or let one team handle it all: build the website, get it ranking on Google and market it to the right customers." />
            <Link className="btn btn-ghost reveal" to="/service">All Services <i className="bi bi-arrow-right" /></Link>
          </div>
          <div className="grid-3">
            {homeServices.map((slug, i) => {
              const s = getService(slug);
              return (
                <Link to={s.path} key={slug} className="card reveal" style={{ "--d": `${i * 0.07}s` }}>
                  <span className="num">0{i + 1}</span>
                  <div className="ic"><i className={`bi ${s.icon}`} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="link-arrow">Learn more <i className="bi bi-arrow-right" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section section-alt">
        <div className="container">
          <div className="sec-row">
            <SectionHead eyebrow="Latest work" title="Websites we've built & grown" text="A few recent projects for clients in Norway, Australia, the UK and Pakistan. Tap any project to see more." />
            <Link className="btn btn-mint reveal" to="/project">View All Work <i className="bi bi-arrow-up-right" /></Link>
          </div>
          <ProjectGrid items={featured} />
        </div>
      </section>

      {/* WHY */}
      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Why Indenio" title="A partner who cares about results, not just delivery" text="You work directly with the people designing, coding and marketing your project, with fast replies on WhatsApp and clear progress at every step." />
            <div className="grid-2" style={{ gap: 16 }}>
              {reasons.map((r, i) => (
                <div className="card reveal" key={r.title} style={{ "--d": `${i * 0.08}s`, padding: "26px 24px" }}>
                  <div className="ic" style={{ width: 48, height: 48, fontSize: 21, marginBottom: 18 }}><i className={`bi ${r.icon}`} /></div>
                  <h3 style={{ fontSize: 18 }}>{r.title}</h3>
                  <p style={{ fontSize: 14.5 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="visual reveal from-right">
            <img src="/assets/svg/why.svg" alt="Fast, secure, SEO-ready websites" width="560" height="460" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead center eyebrow="How we work" title="A simple process, from idea to launch" text="You always know what is happening, what comes next and when it will be ready." />
          <div className="steps">
            {process.map((p, i) => (
              <div className="step reveal" key={p.title} style={{ "--d": `${i * 0.12}s` }}>
                <div className="dot"><i className={`bi ${p.icon}`} /></div>
                <span className="no">STEP 0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Client results" title="Real work for real businesses" text="From gym chains in Norway to e-commerce brands in the UK, here is what we have built and grown for our clients." />
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

      {/* CLIENTS */}
      <section className="section section-alt" style={{ padding: "80px 0" }}>
        <div className="container">
          <SectionHead center eyebrow="Brands we've worked with" title="Logos, websites & campaigns for growing brands" />
        </div>
        <LogoMarquee />
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <SectionHead eyebrow="FAQ" title="Got questions? We've got answers" text="Can't find what you're looking for? Message us on WhatsApp and we'll reply quickly." />
            <div className="visual reveal" style={{ maxWidth: 480 }}>
              <img src="/assets/svg/faq.svg" alt="Questions and answers" width="550" height="555" loading="lazy" />
            </div>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

