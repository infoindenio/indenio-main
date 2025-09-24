import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaChartLine,
  FaNetworkWired,
} from "react-icons/fa";

const SocialMediaProcess = () => {
  const services = [
    {
      icon: <FaFacebookF />,
      title: "Facebook Marketing",
      desc: "Run targeted, creative, and data-driven campaigns to grow brand presence.",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram Marketing",
      desc: "Create engaging visuals, reels, and stories that connect with audiences.",
    },
    {
      icon: <FaTwitter />,
      title: "Twitter Marketing",
      desc: "Share impactful content, trends, and updates to build community trust.",
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn Marketing",
      desc: "Promote professional content and campaigns tailored for B2B audiences.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Insights",
      desc: "Track, analyze, and optimize campaigns for measurable business growth.",
    },
    {
      icon: <FaNetworkWired />, // <-- new icon for network marketing
      title: "Network Marketing",
      desc: "Build strong connections, expand reach, and grow sales through trusted networks.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>Social Media Marketing Services</h2>
          <p>
            We provide a complete range of social media marketing solutions —
            from content creation to analytics — designed to boost visibility
            and engagement.
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

export default SocialMediaProcess;
