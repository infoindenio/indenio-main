import { Link } from "react-router-dom";
import { faqs } from "../data/site";
import { privacy, terms } from "../data/legal";
import { PageHero, Faq, CtaBand } from "../components/ui";

const toFaq = (list) => list.map((x) => ({ q: x.title, a: x.content }));

export function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" text="Everything you need to know about working with Indenio." crumbs={[{ label: "FAQ" }]} />
      <section className="section">
        <div className="container legal"><Faq items={faqs} /></div>
      </section>
      <CtaBand title="Still have a question?" />
    </>
  );
}

export function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text="Your privacy matters. Here is how we collect, use and protect your information." crumbs={[{ label: "Privacy Policy" }]} />
      <section className="section">
        <div className="container legal"><Faq items={toFaq(privacy)} /></div>
      </section>
    </>
  );
}

export function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" text="The terms that apply when you use our website and services." crumbs={[{ label: "Terms & Conditions" }]} />
      <section className="section">
        <div className="container legal"><Faq items={toFaq(terms)} /></div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="nf">
      <div>
        <h1>404</h1>
        <h2 style={{ margin: "10px 0 14px" }}>Page not found</h2>
        <p className="muted" style={{ marginBottom: 30 }}>The page you're looking for doesn't exist or has moved.</p>
        <Link className="btn btn-mint" to="/">Back to Home <i className="bi bi-arrow-right" /></Link>
      </div>
    </section>
  );
}
