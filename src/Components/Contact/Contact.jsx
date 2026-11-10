import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch(
        "https://indenio-server-production.up.railway.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Server not responding. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="agenko-contact pt-130 pb-80">
        <div className="container">
          <div className="row">
            {/* Left side - Contact Info */}
            <div className="col-lg-5">
              <div className="contact-info-wrapper mb-50 pf_fadeup">
                <div className="shape">
                  <span>
                    <img src="/assets/images/pages/shape/world.png" alt="map" />
                  </span>
                </div>
                <ul>
                  <li>
                    <div className="phone">
                      <a href="https://wa.me/923454943966" target="_blank" rel="noopener noreferrer">+92 345 4943966</a>
                    </div>
                  </li>
                  <li>
                    <div className="agenko-info-box">
                      <div className="content">
                        <h3>Address</h3>
                        <p>
                          16 Hill Crest Bar Hill Cambridge <br /> CB23 8TG UK
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="agenko-info-box">
                      <div className="content">
                        <h3>Email</h3>
                        <p>
                          <a href="mailto:info@indenio.com">info@indenio.com</a>
                        </p>
                        <p>
                          <a href="mailto:admin@indenio.com">admin@indenio.com</a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="agenko-info-box">
                      <div className="content">
                        <h3>Follow</h3>
                        <div className="social-link">
                          <a href="https://www.facebook.com/share/1FEQz9PEiq/">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="https://www.instagram.com/indenioteam?utm_source=qr&igsh=MW9uNWgzdHE0aWw0Nw==">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="https://www.linkedin.com/company/indeniocompany/">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="col-lg-7">
              <div className="agenko-content-box mb-50 pf_fadeup">
                <div className="section-title mb-20">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Get started and grow your business now.</h2>
                </div>
                <p className="mb-20">
                  Start today to unlock opportunities and drive your business toward
                  success.
                </p>

                <form
                  id="contact-form"
                  className="agenko-contact-form style-one"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form_control"
                        rows="5"
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="theme-btn" disabled={loading}>
                          {loading ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      {status.message && (
                        <div
                          className={`form-message ${
                            status.type === "success" ? "text-success" : "text-danger"
                          }`}
                        >
                          {status.message}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="agenko-map">
        <div className="map-box" data-aos="fade-up" data-aos-duration="1300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.663615641757!2d0.021819475573630568!3d52.24949335622324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d87647548a0bad%3A0xed80db920df7c6c5!2s16%20Hillcrest%2C%20Bar%20Hill%2C%20Cambridge%20CB23%208TG%2C%20UK!5e0!3m2!1sen!2s!4v1756495113554!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Indenio Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
