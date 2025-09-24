import React from "react";
import {
  FaPencilRuler,
  FaPalette,
  FaFileAlt,
  FaBusinessTime,
  FaTag,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const StationaryProcess = () => {
  const services = [
    {
      icon: <FaPencilRuler />,
      title: "Custom Logo Design",
      desc: "Create unique, professional, and brand-focused logos tailored to your business.",
    },
    {
      icon: <FaPalette />,
      title: "Business Cards",
      desc: "Design elegant, creative, and memorable business cards for strong first impressions.",
    },
    {
      icon: <FaFileAlt />,
      title: "Letterheads",
      desc: "Develop clean, professional, and brand-aligned letterhead designs for companies.",
    },
    {
      icon: <FaBusinessTime />,
      title: "Office Stationary",
      desc: "Provide consistent, branded stationary sets for everyday professional use.",
    },
    {
      icon: <FaTag />,
      title: "Product Labels",
      desc: "Design eye-catching, creative, and brand-focused labels for packaging solutions.",
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Envelopes",
      desc: "Deliver custom, brand-aligned, and stylish envelopes to match your identity.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>Stationary Works Services</h2>
          <p>
            We provide a complete range of creative stationary design solutions —
            from logos to office supplies — crafted to strengthen your brand
            identity.
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

export default StationaryProcess;
