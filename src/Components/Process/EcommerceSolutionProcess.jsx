import React from "react";
import {
  FaShoppingCart,
  FaStore,
  FaCreditCard,
  FaShippingFast,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const EcommerceProcess = () => {
  const services = [
    {
      icon: <FaShoppingCart />,
      title: "Online Store Setup",
      desc: "Build scalable, secure, and fully functional online stores tailored for your business.",
    },
    {
      icon: <FaStore />,
      title: "Custom E-commerce Design",
      desc: "Deliver attractive, user-friendly storefronts that boost customer trust and engagement.",
    },
    {
      icon: <FaCreditCard />,
      title: "Payment Integration",
      desc: "Enable safe, fast, and seamless transactions with multiple payment gateway options.",
    },
    {
      icon: <FaShippingFast />,
      title: "Order & Shipping",
      desc: "Simplify order management with automated shipping, tracking, and delivery solutions.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Management",
      desc: "Engage customers with personalized experiences, loyalty programs, and support tools.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Growth",
      desc: "Track sales, monitor performance, and scale your e-commerce business effectively.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>E-commerce Solutions</h2>
          <p>
            We deliver complete e-commerce solutions — from storefront design to
            secure payments and customer management — helping your business grow
            online.
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

export default EcommerceProcess;
