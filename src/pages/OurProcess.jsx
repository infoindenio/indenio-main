import { process, reasons } from "../data/site";
import { PageHero, SectionHead, Faq, CtaBand } from "../components/ui";

const detail = [
  ["Free discovery call on WhatsApp or video", "We learn your goals, customers and competitors", "You get a clear plan, timeline and fixed quote"],
  ["Wireframes and full design in Figma", "You review on desktop and mobile", "Unlimited small tweaks until you're happy"],
  ["Custom-coded, fast and secure build", "SEO, speed and tracking set up", "Tested on phones, tablets and desktops"],
  ["Launch, Google Search Console and Analytics", "Training so you can edit content yourself", "Ongoing SEO, ads and support plans"],
];

export default function OurProcess() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="How we take your project from idea to launch"
        text="A simple, transparent process with updates on WhatsApp at every step, so you always know what's happening and when it will be ready."
        crumbs={[{ label: "Our Process" }]}
      />

      <section className="section">
        <div className="container">
          {process.map((p, i) => (
            <div className="split reveal" key={p.title} style={{ marginBottom: 70 }}>
              <div style={{ order: i % 2 ? 2 : 1 }}>
                <span className="eyebrow">Step 0{i + 1}</span>
                <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: "18px 0 14px" }}>{p.title}</h2>
                <p className="muted" style={{ fontSize: 17.5 }}>{p.text}</p>
                <ul className="checks">
                  {detail[i].map((d) => <li key={d}><i className="bi bi-check-lg" />{d}</li>)}
                </ul>
              </div>
              <div style={{ order: i % 2 ? 1 : 2, display: "grid", placeItems: "center" }}>
                <div className="card" style={{ width: "100%", maxWidth: 440, textAlign: "center", padding: "60px 30px" }}>
                  <div className="ic" style={{ margin: "0 auto 26px", width: 96, height: 96, fontSize: 42, borderRadius: 28 }}><i className={`bi ${p.icon}`} /></div>
                  <div style={{ fontFamily: "var(--head)", fontWeight: 800, fontSize: 64, color: "rgba(0,255,188,.18)", lineHeight: 1 }}>0{i + 1}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div className="visual reveal from-left" style={{ maxWidth: 440, justifySelf: "center" }}>
            <img src="/assets/svg/wedo.svg" alt="What we do" width="440" height="532" loading="lazy" />
          </div>
          <div>
            <SectionHead eyebrow="Our values" title="What you can always expect from us" />
            <div className="grid-2" style={{ gap: 16 }}>
              {reasons.map((r, i) => (
                <div className="card reveal" key={r.title} style={{ "--d": `${i * 0.08}s`, padding: "24px 22px" }}>
                  <div className="ic" style={{ width: 46, height: 46, fontSize: 20, marginBottom: 16 }}><i className={`bi ${r.icon}`} /></div>
                  <h3 style={{ fontSize: 17 }}>{r.title}</h3>
                  <p style={{ fontSize: 14.5 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHead center eyebrow="FAQ" title="Questions about working with us" />
          <Faq />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
