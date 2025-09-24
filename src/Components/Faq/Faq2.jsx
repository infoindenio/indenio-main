import React, { useEffect, useRef, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const Faq2 = () => {
  const faqContent = [
    { 
      title: "What services does Indenio provide?", 
      content: "Indenio offers web development, mobile apps, e-commerce platforms, and branding solutions crafted to help businesses grow and strengthen their digital presence." 
    },
    { 
      title: "Can I manage and update my project content myself?", 
      content: "Yes, Indenio delivers CMS-based solutions such as WordPress, Shopify, or custom dashboards, enabling you to edit content, add pages, and manage updates easily." 
    },
    { 
      title: "How does Indenio’s project process work?", 
      content: "Our team follows a structured process including discovery, planning, design, development, and testing, ensuring smooth delivery and excellent outcomes." 
    },
    { 
      title: "How long will it take to finish my project?", 
      content: "Timelines vary by project size and complexity, but Indenio ensures timely delivery by setting clear milestones and maintaining transparent communication." 
    },
    { 
      title: "Does Indenio provide support after project delivery?", 
      content: "Yes, Indenio offers maintenance, technical support, and performance monitoring to keep your digital platforms secure, updated, and running smoothly." 
    },
    { 
      title: "Can Indenio redesign or upgrade my existing website?", 
      content: "Absolutely, Indenio specializes in modernising outdated websites with fresh designs, advanced features, and improved user experiences aligned with today’s standards." 
    },
    { 
      title: "What industries does Indenio work with?", 
      content: "We partner with startups, SMEs, and enterprises across sectors like retail, healthcare, travel, fintech, education, and e-commerce, tailoring solutions to each." 
    },
    { 
      title: "Does Indenio offer AI or automation solutions?", 
      content: "Yes, Indenio delivers AI-driven automation and smart technologies that streamline workflows, improve efficiency, and provide businesses with a competitive edge." 
    },
    { 
      title: "Where is Indenio based?", 
      content: "Indenio is headquartered in London, United Kingdom, serving clients worldwide with solutions that combine global innovation and local expertise." 
    },
    { 
      title: "Can Indenio handle enterprise-level projects?", 
      content: "Yes, our team has the scalability and expertise to deliver enterprise-grade applications, cloud platforms, and advanced software for large organisations." 
    },
    { 
      title: "Does Indenio provide custom software solutions?", 
      content: "Yes, in addition to websites and apps, we create bespoke software systems designed to solve complex business challenges with innovation and precision." 
    },
    { 
      title: "How does Indenio ensure project quality?", 
      content: "Every project undergoes rigorous QA testing, performance checks, and user experience validation to guarantee high-quality, reliable digital products." 
    },
    { 
      title: "Does Indenio offer long-term partnerships?", 
      content: "Yes, we act as long-term digital partners, providing continuous innovation, upgrades, and strategic support to keep your business ahead of industry trends." 
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

export default Faq2;
