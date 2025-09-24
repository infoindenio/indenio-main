import React, { useEffect, useRef, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const faqContent = [
    { 
      title: "What do these Terms & Conditions cover?", 
      content: "These Terms & Conditions outline the rules, obligations, and guidelines for using Indenio’s website, services, and digital solutions in a lawful and responsible manner within the United Kingdom." 
    },
    { 
      title: "Can users access our services without agreement?", 
      content: "No, by accessing our website or using our services, you agree to comply with these Terms & Conditions. If you do not agree, you should discontinue use immediately." 
    },
    { 
      title: "How can the Terms & Conditions change?", 
      content: "Indenio may update or revise these Terms at any time to reflect service changes, legal requirements, or business updates. Continued use implies acceptance of any modifications." 
    },
    { 
      title: "What is the responsibility of users?", 
      content: "Users must provide accurate information, use services legally, respect intellectual property, and avoid misuse such as fraud, hacking, or unauthorized activities." 
    },
    { 
      title: "What happens if a user violates the Terms?", 
      content: "Indenio reserves the right to suspend, restrict, or terminate access to services without notice if users fail to comply with these Terms & Conditions." 
    },
    { 
      title: "Can users request cancellation of services?", 
      content: "Yes, users may request cancellation in writing. However, certain fees or non-refundable costs may still apply as outlined in individual project agreements." 
    },
    { 
      title: "Does Indenio offer warranties on services?", 
      content: "Indenio delivers high-quality solutions but provides services 'as is' without any implied warranties. We disclaim responsibility for errors, downtime, or third-party issues." 
    },
    { 
      title: "What is Indenio’s liability policy?", 
      content: "Indenio limits liability for damages arising from use of our services. We are not responsible for indirect losses, third-party content, or client-side technical errors." 
    },
    { 
      title: "How are payments and billing handled?", 
      content: "Payments are subject to agreed milestones or contracts. Clients must clear dues within deadlines. Delays may affect project timelines or service continuation." 
    },
    { 
      title: "Are intellectual property rights protected?", 
      content: "Yes, all designs, code, and digital assets remain Indenio’s intellectual property unless specifically transferred under written agreement with the client." 
    },
    { 
      title: "What law governs these Terms & Conditions?", 
      content: "These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of London, United Kingdom." 
    },
    { 
      title: "Can users contact Indenio for clarifications?", 
      content: "Yes, users can reach out anytime for clarification on policies, contracts, or service terms. Transparency is central to maintaining strong partnerships." 
    },
    { 
      title: "Do these Terms create a partnership?", 
      content: "No, these Terms do not create a joint venture, partnership, or employment relationship between Indenio and clients. Each party remains independent." 
    },
  ];


  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
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
        setStatus({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Server not responding. Try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="agenko-faqs pt-130 pb-90">
      <div className="container">
        <div className="row">
          {/* Left side - FAQ */}
          <div className="col-lg-8">
                        <div className="agenko-accordion mb-30" id="accordionOne">
                        {faqContent.map((item, index) => (
                            <div key={index} className={`agenko-accordion-item mb-20 pf_fadeup ${index === openItemIndex ? "active" : "" }`} >
                                <div onClick={() => handleItemClick(index)} className="accordion-header">
                                    <h6 className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true">
                                    {item.title}
                                    </h6>
                                </div>
                                <div ref={accordionContentRef} id="collapse1" className="accordion-collapse accordion-content" data-bs-parent="#accordionOne">
                                    <div className="accordion-content">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                             ))}
                        </div>
                    </div>

          {/* Right side - Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar-widget-area">
              {/* Contact Form */}
              <div className="sidebar-widget 2 mb-30 wow fadeInDown">
                <div className="widget-content">
                  <h4 className="sidebar-title">Get In Touch</h4>
                  <p className="mb-15">
                    Contact us for project inquiries, support & collaboration
                    opportunities.
                  </p>
                  <form
                    className="agenko-contact-form style-one"
                    onSubmit={handleSubmit}
                  >
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
                    <div className="form-group">
                      <textarea
                        className="form_control"
                        placeholder="Message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button className="theme-btn style-two" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                    {status.message && (
                      <div
                        className={`form-message mt-2 ${
                          status.type === "success"
                            ? "text-success"
                            : "text-danger"
                        }`}
                      >
                        {status.message}
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Banner */}
              <div className="sidebar-widget sidebar-banner-widget mb-30 wow fadeInDown">
                <div
                  className="widget-content bg_cover"
                  data-background="/assets/images/pages/blog/post-banner.png"
                >
                  <div className="content">
                    <h3>Transforming ideas into powerful digital solutions.</h3>
                    <Link to="/contact" className="theme-btn style-two">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
