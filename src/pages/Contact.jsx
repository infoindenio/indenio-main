import { PageHero, SectionHead, ContactList, Faq } from "../components/ui";
import ContactForm from "../components/ContactForm";
import { faqs } from "../data/site";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something that grows your business"
        text="Message us on WhatsApp for the fastest reply, or fill in the form and we'll get back to you within 24 hours."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="section" id="contact-form">
        <div className="container contact-grid">
          <div>
            <SectionHead eyebrow="Get in touch" title="We reply fast" text="Free consultation, clear quote, no obligation." />
            <ContactList />
          </div>
          <ContactForm />
        </div>
        <div className="container">
          <div className="map reveal">
            <iframe
              title="Indenio UK office map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=16%20Hillcrest%2C%20Bar%20Hill%2C%20Cambridge%20CB23%208TG&output=embed"
            />
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHead center eyebrow="FAQ" title="Before you get in touch" />
          <Faq items={faqs.slice(1)} />
        </div>
      </section>
    </>
  );
}
