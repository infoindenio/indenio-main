import { Link } from "react-router-dom";
import { categories, getService, process } from "../data/site";
import { PageHero, SectionHead, CtaBand } from "../components/ui";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything your business needs to grow online"
        text="Development, design and marketing from one team. Pick one service or let us handle the complete package."
        crumbs={[{ label: "Services" }]}
      />
      {categories.map((c, ci) => (
        <section className={`section${ci % 2 ? " section-alt" : ""}`} key={c.slug}>
          <div className="container">
            <div className="sec-row">
              <SectionHead eyebrow={c.title} title={c.intro} />
              <Link className="btn btn-ghost reveal" to={c.path}>Explore {c.title} <i className="bi bi-arrow-right" /></Link>
            </div>
            <div className={c.services.length === 4 ? "grid-4" : c.services.length === 2 ? "grid-2" : "grid-3"}>
              {c.services.map((slug, i) => {
                const s = getService(slug);
                return (
                  <Link to={s.path} key={slug} className="card reveal" style={{ "--d": `${i * 0.07}s` }}>
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
      ))}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="How we work" title="Four simple steps to launch" />
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
      <CtaBand />
    </>
  );
}
