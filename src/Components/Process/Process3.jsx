import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      desc: "Craft semantic, modern, and accessible website structures for scalable projects.",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      desc: "Design visually appealing, responsive, and user-friendly interfaces.",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      desc: "Develop interactive, fast, and dynamic web applications.",
    },
    {
      icon: <FaReact />,
      title: "React",
      desc: "Build scalable, component-driven, and high-performance front-end solutions.",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      desc: "Create efficient, secure, and robust server-side applications and APIs.",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      desc: "Manage, store, and secure business data with optimized database solutions.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>Web Development Services</h2>
          <p>
            We provide a complete range of web development solutions — from
            front-end design to back-end systems and databases — tailored to
            grow your business.
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

export default Services;
