import React from "react";
import {
  FaPencilRuler,
  FaPalette,
  FaMobileAlt,
  FaUserFriends,
  FaDraftingCompass,
  FaAccessibleIcon,
} from "react-icons/fa";

const UiUxProcess = () => {
  const services = [
    {
      icon: <FaPencilRuler />,
      title: "Wireframing",
      desc: "Create clear, structured wireframes to visualize user journeys effectively.",
    },
    {
      icon: <FaPalette />,
      title: "Visual Design",
      desc: "Craft engaging, modern, and visually stunning user interfaces.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Ensure seamless, adaptive experiences across all devices and screens.",
    },
    {
      icon: <FaUserFriends />,
      title: "User Research",
      desc: "Conduct research to understand users and deliver intuitive solutions.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Prototyping",
      desc: "Build interactive prototypes to test and validate design ideas early.",
    },
    {
      icon: <FaAccessibleIcon />,
      title: "Accessibility",
      desc: "Design inclusive, accessible experiences for diverse user needs.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>UI/UX Design Services</h2>
          <p>
            We provide complete UI/UX design solutions — from research and
            wireframing to prototyping and accessibility — focused on delivering
            exceptional user experiences.
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

export default UiUxProcess;
