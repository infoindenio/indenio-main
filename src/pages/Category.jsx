import { Link } from "react-router-dom";
import { categories, getService, projects } from "../data/site";
import { PageHero, SectionHead, CtaBand } from "../components/ui";
import { ProjectGrid } from "../components/Projects";

export default function Category({ slug }) {
  const c = categories.find((x) => x.slug === slug);
  const tags = c.services.flatMap((s) => getService(s).tags);
  const related = projects.filter((p) => tags.includes(p.category)).slice(0, 6);

  return (
    <>
      <PageHero eyebrow="Services" title={c.title} text={c.intro} crumbs={[{ label: "Services", to: "/service" }, { label: c.title }]} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="banner reveal zoom">
            <img src={c.banner} alt={c.title} width="1290" height="500" />
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {c.services.map((slug2, i) => {
            const s = getService(slug2);
            return (
              <div className="split reveal" key={slug2} style={{ marginBottom: 80 }}>
                <div style={{ order: i % 2 ? 2 : 1 }}>
                  <span className="eyebrow">0{i + 1}</span>
                  <h2 style={{ fontSize: "clamp(28px,3.4vw,40px)", margin: "18px 0 14px" }}>{s.title}</h2>
                  <p className="muted" style={{ fontSize: 17 }}>{s.intro[0]}</p>
                  <ul className="checks two">
                    {s.features.slice(0, 4).map((f) => <li key={f}><i className="bi bi-check-lg" />{f}</li>)}
                  </ul>
                  <Link className="btn btn-mint" to={s.path}>Explore {s.title} <i className="bi bi-arrow-right" /></Link>
                </div>
                <div className="visual" style={{ order: i % 2 ? 1 : 2, maxWidth: 420, justifySelf: "center" }}>
                  <img src={s.square} alt={s.title} width="300" height="300" loading="lazy" style={{ width: "100%" }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {related.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <SectionHead eyebrow="Our work" title={`${c.title} projects`} />
            <ProjectGrid items={related} />
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
