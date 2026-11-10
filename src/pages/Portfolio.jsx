import { useState } from "react";
import { projects, projectFilters } from "../data/site";
import { PageHero, CtaBand } from "../components/ui";
import { ProjectGrid } from "../components/Projects";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const items = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const count = (k) => (k === "all" ? projects.length : projects.filter((p) => p.category === k).length);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work we're proud of"
        text="Websites, online stores, apps, logos and marketing for clients in the UK, USA, Norway, Australia and Pakistan. Tap any project to see it up close."
        crumbs={[{ label: "Portfolio" }]}
      />
      <section className="section">
        <div className="container">
          <div className="filters" role="tablist">
            {projectFilters.map((f) => (
              <button key={f.key} className={filter === f.key ? "on" : ""} onClick={() => setFilter(f.key)} role="tab" aria-selected={filter === f.key}>
                {f.label}<small>{count(f.key)}</small>
              </button>
            ))}
          </div>
          <ProjectGrid key={filter} items={items} />
        </div>
      </section>
      <CtaBand title="Want results like these for your business?" />
    </>
  );
}
