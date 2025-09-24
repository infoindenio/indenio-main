import React from "react";
import {
  FaBullhorn,
  FaPaintBrush,
  FaTrademark,
  FaRegImage,
  FaUserTie,
  FaLightbulb,
} from "react-icons/fa";

const BrandProcess = () => {
  const services = [
    {
      icon: <FaBullhorn />,
      title: "Brand Strategy",
      desc: "Develop clear, targeted, and impactful brand strategies to grow businesses.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Visual Identity",
      desc: "Design consistent, creative, and professional visual identities for brands.",
    },
    {
      icon: <FaTrademark />,
      title: "Logo & Guidelines",
      desc: "Craft timeless logos and create detailed brand guideline documentation.",
    },
    {
      icon: <FaRegImage />,
      title: "Marketing Materials",
      desc: "Produce engaging, on-brand, and effective promotional design materials.",
    },
    {
      icon: <FaUserTie />,
      title: "Corporate Branding",
      desc: "Build strong, unified branding for businesses to increase recognition.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Campaigns",
      desc: "Deliver innovative, memorable, and customer-focused branding campaigns.",
    },
  ];

  return (
    <section className="services-section">
      <div className="containerProcess">
        {/* Section Title */}
        <div className="section-header">
          <h2>Branding Services</h2>
          <p>
            We provide a complete range of branding solutions — from strategy to
            visual identity — designed to strengthen recognition and customer
            loyalty.
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

export default BrandProcess;
