import { useEffect, useState } from "react";

const label = (c) =>
  ({ website: "Website", ecommerce: "E-commerce", "seo & marketing": "SEO & Marketing", figma: "UI/UX", app: "App", branding: "Logo" }[c] || c);

export function ProjectCard({ item, onOpen, delay = 0 }) {
  return (
    <button className="project pop" style={{ "--d": `${delay}s` }} onClick={onOpen} aria-label={`Open ${item.title}`}>
      <div className={`thumb${item.square ? " square" : ""}${item.image?.endsWith(".webp") && !item.square ? " wide" : ""}`}>
        <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
        <span className="badge">{label(item.category)}</span>
        <span className="view"><i className="bi bi-arrow-up-right" /></span>
      </div>
      <div className="body">
        <div className="meta">
          <h3>{item.title}</h3>
          {item.country && <span className="country">{item.country}</span>}
        </div>
        {item.summary && <p>{item.summary}</p>}
        <div className="tags">{item.tags?.slice(0, 3).map((t) => <span key={t}>{t}</span>)}</div>
      </div>
    </button>
  );
}

export function ProjectModal({ items, index, setIndex }) {
  const item = items[index];
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [items.length, setIndex]);
  if (!item) return null;
  return (
    <div className="modal" onClick={() => setIndex(null)} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setIndex(null)} aria-label="Close"><i className="bi bi-x-lg" /></button>
        <button className="modal-nav prev" onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)} aria-label="Previous"><i className="bi bi-chevron-left" /></button>
        <button className="modal-nav next" onClick={() => setIndex((i) => (i + 1) % items.length)} aria-label="Next"><i className="bi bi-chevron-right" /></button>
        <div className={`img${item.square ? " square" : ""}`}>
          <img key={item.id} className="pop" src={item.mockup || item.image} alt={item.title} />
        </div>
        <div className="info">
          <div>
            {item.country && <span className="eyebrow">{item.country}</span>}
            <h3 style={{ marginTop: item.country ? 14 : 0 }}>{item.title}</h3>
            {item.summary && <p>{item.summary}</p>}
            <div className="tags">{item.tags?.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
          {item.link && (
            <a className="btn btn-mint" href={item.link} target="_blank" rel="noopener noreferrer">
              Visit Website <i className="bi bi-arrow-up-right" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectGrid({ items }) {
  const [index, setIndex] = useState(null);
  return (
    <>
      <div className="projects">
        {items.map((p, i) => (
          <ProjectCard key={p.id} item={p} delay={Math.min(i, 8) * 0.05} onOpen={() => setIndex(i)} />
        ))}
      </div>
      {index !== null && <ProjectModal items={items} index={index} setIndex={setIndex} />}
    </>
  );
}
