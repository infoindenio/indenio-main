import React from "react";
import {
  FaCogs,
  FaLaptopCode,
  FaTools,
  FaProjectDiagram,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const SoftwareProcess = () => {
  const services = [
    {
      icon: <FaCogs />,
      title: "Custom Solutions",
      desc: "Develop tailored software solutions designed to meet unique business requirements.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Design",
      desc: "Deliver intuitive, efficient, and scalable designs for long-term adaptability.",
    },
    {
      icon: <FaTools />,
      title: "Application Development",
      desc: "Build secure, high-performing desktop and enterprise applications.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "System Integration",
      desc: "Integrate multiple systems and platforms for seamless business operations.",
    },
    {
      icon: <FaServer />,
      title: "Enterprise Software",
      desc: "Create powerful enterprise-grade applications to streamline processes.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Maintenance",
      desc: "Ensure long-term security, performance, and maintenance of applications.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>Custom Software Development</h2>
          <p>
            We deliver complete custom software solutions — from design and
            development to system integration and enterprise support — tailored
            to your business needs.
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

export default SoftwareProcess;
