import React, { useEffect, useRef, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const faqContent = [
    { 
      title: "What type of information do we collect?", 
      content: "We collect personal details such as your name, email, phone number, and project-related information you provide through forms, ensuring we only gather what is necessary to deliver our services effectively." 
    },
    { 
      title: "How do we use your information?", 
      content: "Your information is used to communicate with you, manage service requests, improve our solutions, and provide relevant updates in line with UK GDPR compliance." 
    },
    { 
      title: "Do we share your information with others?", 
      content: "We do not sell or trade your information. Data may only be shared with trusted UK or international partners and service providers under secure and lawful agreements." 
    },
    { 
      title: "How do we protect your personal data?", 
      content: "We implement encryption, firewalls, and strict access controls to safeguard your personal data against loss, misuse, or unauthorized access, in compliance with UK data laws." 
    },
    { 
      title: "Can you access or update your information?", 
      content: "Yes, you may request access to, correction of, or deletion of your data at any time by contacting our Data Protection Officer through our official channels." 
    },
    { 
      title: "Do we use cookies or tracking tools?", 
      content: "Yes, we use cookies and analytics tools to enhance user experience, track website performance, and deliver more personalized services in line with cookie regulations." 
    },
    { 
      title: "How long do we retain your data?", 
      content: "We retain your personal data only as long as necessary to provide services, meet legal obligations, or resolve disputes, after which it is securely deleted." 
    },
    { 
      title: "What are your rights regarding your data?", 
      content: "You have the right to request access, rectification, restriction, portability, or deletion of your personal data in accordance with the UK GDPR and data protection laws." 
    },
    { 
      title: "Is your data transferred internationally?", 
      content: "Yes, in some cases data may be transferred outside the UK, but only with safeguards such as Standard Contractual Clauses to ensure lawful protection of your information." 
    },
    { 
      title: "Do we handle children’s data?", 
      content: "Our services are not directed at children under 13, and we do not knowingly collect personal data from them. Any accidental submissions will be deleted promptly." 
    },
    { 
      title: "Can this privacy policy change?", 
      content: "Yes, we may update this Privacy Policy to reflect changes in law, technology, or practices. Any updates will be posted on our website with the effective date clearly stated." 
    },
    { 
      title: "How are third-party services handled?", 
      content: "Third-party providers we work with have their own privacy practices, and we ensure they comply with strong UK and international data protection standards." 
    },
    { 
      title: "How can you contact us for privacy concerns?", 
      content: "If you have questions or complaints regarding your data, you can contact us anytime through our official support channels or our Data Protection Officer in the UK." 
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
          {/* Left side - Privacy Policy Accordion */}
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
              <div className="sidebar-widget mb-30 wow fadeInDown">
                <div className="widget-content">
                  <h4 className="sidebar-title">Get In Touch</h4>
                  <p className="mb-15">
                    Reach out to us for privacy concerns, policy clarifications,
                    or general inquiries.
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
                    <h3>Your privacy matters — we protect your data with care.</h3>
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

export default PrivacyPolicy;
