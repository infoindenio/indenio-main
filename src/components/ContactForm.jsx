import { useState } from "react";
import { contact, services, waLink } from "../data/site";

// Sends enquiries to the Indenio mail server, which delivers them to
// info@indenio.com through Hostinger email (smtp.hostinger.com).
export default function ContactForm() {
  const empty = { name: "", email: "", phone: "", service: "", message: "" };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState(null); // {type, text}
  const [sending, setSending] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    const message =
      `Service: ${form.service || "Not specified"}\n` +
      `Phone/WhatsApp: ${form.phone || "Not given"}\n\n` +
      form.message;
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus({ type: "ok", text: "Thank you! Your message has been sent. We'll reply within 24 hours." });
      setForm(empty);
    } catch {
      setStatus({ type: "err" });
    } finally {
      setSending(false);
    }
  };

  const fallbackText = `Hi Indenio, I'm ${form.name || "interested in your services"}. ${form.service ? `Service: ${form.service}. ` : ""}${form.message}`;

  return (
    <form className="form reveal from-right" onSubmit={submit}>
      <h3>Tell us about your project</h3>
      <p>Fill in the form and we'll get back to you within 24 hours.</p>
      <div className="row2">
        <div className="field">
          <label htmlFor="cf-name">Your name *</label>
          <input id="cf-name" name="name" value={form.name} onChange={change} required placeholder="John Smith" />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" type="email" name="email" value={form.email} onChange={change} required placeholder="you@company.com" />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="cf-phone">Phone / WhatsApp</label>
          <input id="cf-phone" name="phone" value={form.phone} onChange={change} placeholder="+44 7..." />
        </div>
        <div className="field">
          <label htmlFor="cf-service">Service</label>
          <select id="cf-service" name="service" value={form.service} onChange={change}>
            <option value="">Choose a service</option>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
            <option>Complete package (Web + SEO + Marketing)</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Project details *</label>
        <textarea id="cf-msg" name="message" value={form.message} onChange={change} required placeholder="What do you need, and by when?" />
      </div>
      <button className="btn btn-mint" type="submit" disabled={sending}>
        {sending ? "Sending..." : <>Send Message <i className="bi bi-send" /></>}
      </button>
      {status?.type === "ok" && <div className="form-msg ok">{status.text}</div>}
      {status?.type === "err" && (
        <div className="form-msg err">
          Sorry, the message could not be sent right now. Please{" "}
          <a href={waLink(fallbackText)} target="_blank" rel="noopener noreferrer">send it on WhatsApp</a> or email{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </div>
      )}
    </form>
  );
}
