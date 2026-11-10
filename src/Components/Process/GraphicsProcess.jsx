import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Process3.css"; // Custom CSS for hover + zoom + overlay

const GraphicsProcess = () => {
  const navigate = useNavigate();

  const processContent = [
    {
      img: "/assets/svg/square-branding.svg",
      title: "Branding",
      link: "/service/branding",
    },
    {
      img: "/assets/svg/square-stationary.svg",
      title: "Stationary Work",
      link: "/service/stationary",
    },
  ];

  return (
    <section className="agenko-process pt-80 pb-0">
      <div className="container">
        {/* Section Title */}
        <div className="dev-section-title mb-70">
          <h2 className="dev-title">Graphics Services</h2>
          <p className="dev-subtitle">
            We design creative and visually appealing solutions that strengthen your brand identity.
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

export default GraphicsProcess;
