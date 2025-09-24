import React from "react";
import {
  FaSearch,
  FaChartLine,
  FaLink,
  FaPenNib,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";

const SeoProcess = () => {
  const services = [
    {
      icon: <FaSearch />,
      title: "Keyword Research",
      desc: "Identify high-value keywords to drive targeted traffic and visibility.",
    },
    {
      icon: <FaChartLine />,
      title: "On-Page SEO",
      desc: "Optimize content, meta tags, and headings for better search rankings.",
    },
    {
      icon: <FaLink />,
      title: "Link Building",
      desc: "Build quality backlinks that strengthen authority and trust online.",
    },
    {
      icon: <FaPenNib />,
      title: "Content Optimization",
      desc: "Craft SEO-friendly, engaging, and audience-focused website content.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile SEO",
      desc: "Ensure websites are responsive, fast, and optimized for mobile users.",
    },
    {
      icon: <FaServer />,
      title: "Technical SEO",
      desc: "Enhance site speed, crawlability, and indexing for search engines.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>SEO Services</h2>
          <p>
            We provide a complete range of SEO solutions — from keyword research
            to technical optimization — tailored to improve rankings and traffic.
          </p>
        </div>

        {/* Service Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">{service.icon}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoped Styling */}
      
    </section>
  );
};

export default SeoProcess;
