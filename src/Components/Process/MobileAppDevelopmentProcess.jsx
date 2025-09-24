import React from "react";
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaCode,
  FaCloudUploadAlt,
  FaShieldAlt,
} from "react-icons/fa";

const MobileProcess = () => {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: "Cross-Platform Apps",
      desc: "Deliver seamless, high-performance apps that run smoothly on both iOS and Android devices.",
    },
    {
      icon: <FaApple />,
      title: "iOS Development",
      desc: "Build sleek, secure, and scalable mobile solutions tailored for Apple’s iOS ecosystem.",
    },
    {
      icon: <FaAndroid />,
      title: "Android Development",
      desc: "Develop robust, engaging, and user-friendly apps optimized for Android platforms.",
    },
    {
      icon: <FaCode />,
      title: "UI/UX Design",
      desc: "Create intuitive, interactive, and visually appealing app interfaces for better engagement.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "App Deployment",
      desc: "Handle smooth publishing, updates, and scaling of apps across Google Play and App Store.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Maintenance",
      desc: "Ensure reliable performance with ongoing updates, bug fixes, and data protection features.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>Mobile App Development Services</h2>
          <p>
            We specialize in delivering end-to-end mobile app solutions — from
            design and coding to deployment and support — built to scale your
            business digitally.
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
    </section>
  );
};

export default MobileProcess;
