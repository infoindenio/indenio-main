import { Link } from "react-router-dom";
import { categories, getService, process, projects, faqs, waLink } from "../data/site";
import { PageHero, SectionHead, Faq, CtaBand } from "../components/ui";
import { ProjectGrid } from "../components/Projects";

export default function ServiceDetail({ slug }) {
  const s = getService(slug);
  const cat = categories.find((c) => c.slug === s.category);
  const related = projects.filter((p) => s.tags.includes(p.category)).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={cat.title}
        title={s.title}
        text={s.short}
        crumbs={[{ label: "Services", to: "/service" }, { label: cat.title, to: cat.path }, { label: s.title }]}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="banner reveal zoom">
            <img src={s.banner} alt={s.title} width="1290" height="500" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container sd-grid">
          <div>
            <SectionHead eyebrow="Overview" title={`${s.title} that brings results`} />
            <div className="lead reveal">{s.intro.map((p) => <p key={p}>{p}</p>)}</div>
            <h3 className="reveal" style={{ fontSize: 24, marginTop: 30 }}>What's included</h3>
            <ul className="checks two reveal">
              {s.features.map((f) => <li key={f}><i className="bi bi-check-lg" />{f}</li>)}
            </ul>
            <h3 className="reveal" style={{ fontSize: 24, margin: "50px 0 30px" }}>How it works</h3>
            <div className="grid-2">
              {process.map((p, i) => (
                <div className="card reveal" key={p.title} style={{ "--d": `${i * 0.08}s`, padding: "26px 24px" }}>
                  <span className="num">0{i + 1}</span>
                  <div className="ic" style={{ width: 48, height: 48, fontSize: 21, marginBottom: 16 }}><i className={`bi ${p.icon}`} /></div>
                  <h3 style={{ fontSize: 18 }}>{p.title}</h3>
                  <p style={{ fontSize: 14.5 }}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="side-card reveal from-right">
            <h4>{cat.title}</h4>
            {cat.services.map((x) => {
              const o = getService(x);
              return (
                <Link key={x} to={o.path} className={`svc${x === slug ? " on" : ""}`}>
                  {o.title} <i className="bi bi-arrow-right" />
                </Link>
              );
            })}
            <div className="help">
              <h4 style={{ marginBottom: 0 }}>Need {s.title.toLowerCase()}?</h4>
              <p>Tell us what you need and get a free plan and quote within 24 hours.</p>
              <a className="btn btn-wa" href={waLink(`Hi Indenio, I'm interested in ${s.title}.`)} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp" /> WhatsApp Us
              </a>
              <Link className="btn btn-ghost" to="/contact" style={{ marginTop: 10, width: "100%" }}>Contact Form</Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="sec-row">
              <SectionHead eyebrow="Related work" title={`Recent ${s.title.toLowerCase()} projects`} />
              <Link className="btn btn-ghost reveal" to="/project">All Projects <i className="bi bi-arrow-right" /></Link>
            </div>
            <ProjectGrid items={related} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHead center eyebrow="FAQ" title="Common questions" />
          <Faq items={faqs.slice(1, 6)} />
        </div>
      </section>

      <CtaBand title={`Let's talk about your ${s.title.toLowerCase()} project`} />
    </>
  );
}
