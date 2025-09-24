import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Process3.css"; // Custom CSS for hover + zoom + overlay

const DevelopmentProcess = () => {
  const navigate = useNavigate();

  const processContent = [
    {
      img: "/assets/images/pages/gallery/process1.webp",
      title: "Web Development",
      link: "/service/web",
    },
    {
      img: "/assets/images/pages/gallery/process2.webp",
      title: "Mobile App Development",
      link: "/service/mobile",
    },
    {
      img: "/assets/images/pages/gallery/process3.webp",
      title: "E-commerce Solutions",
      link: "/service/ecommerce",
    },
    {
      img: "/assets/images/pages/gallery/process4.webp",
      title: "Custom Software Development",
      link: "/service/software",
    },
  ];

  return (
    <section className="agenko-process pt-80 pb-0">
      <div className="container">
        {/* Section Title */}
        <div className="dev-section-title mb-70">
          <h2 className="dev-title">Development Services</h2>
          <p className="dev-subtitle">
            We build scalable, secure, and high-performance solutions that empower your business.
          </p>
        </div>

        <div className="agenko-process-wrapper-two pf_fadeup">
          <div className="row">
            {processContent.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12">
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

export default DevelopmentProcess;
