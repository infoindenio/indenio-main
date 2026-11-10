import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Process3.css"; // Custom CSS for hover + zoom + overlay

const MarketingProcess = () => {
  const navigate = useNavigate();

  const processContent = [
    {
      img: "/assets/svg/square-social.svg",
      title: "Social Media Marketing",
      link: "/service/social-media",
    },
    {
      img: "/assets/svg/square-seo.svg",
      title: "SEO",
      link: "/service/seo",
    },
  ];

  return (
    <section className="agenko-process pt-80 pb-0">
      <div className="container">
        {/* Section Title */}
        <div className="dev-section-title mb-70">
          <h2 className="dev-title">Marketing Services</h2>
          <p className="dev-subtitle">
            We help your business grow online with powerful marketing strategies and digital visibility.
          </p>
        </div>

        <div className="agenko-process-wrapper-two pf_fadeup">
          <div className="row">
            {processContent.map((item, i) => (
              <div key={i} className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className="dev-service-card mb-40"
                  onClick={() => navigate(item.link)}
                >
                  <div className="thumbnail">
                    <img src={item.img} alt={item.title} className="service-img" />
                    <div className="overlay">
                      <h4 className="service-title">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingProcess;
