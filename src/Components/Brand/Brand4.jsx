import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Brand4 = () => {
    const brandContent = [
        { img: '/assets/images/pages/client/client1.png' },
        { img: '/assets/images/pages/client/client2.png' },
        { img: '/assets/images/pages/client/client6.png' },
        { img: '/assets/images/pages/client/client4.png' },
        { img: '/assets/images/pages/client/client5.png' },
    ];

    const [shuffledBrands, setShuffledBrands] = useState(brandContent);

    // Shuffle function (Fisher-Yates)
    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setShuffledBrands(shuffleArray(brandContent));
        }, 2000); // har 2 second baad shuffle hoga

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <section className="agenko-company pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-40 pf_zoomIn">
                            <span className="sub-title">Our Client</span>
                            <h2>Brands We Have Worked With</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="company-list d-flex flex-wrap justify-content-center">
                            {shuffledBrands.map((item, i) => (
                                <div key={i} className="agenko-client-item style-two mb-40 pf_fadeup">
                                    <div className="client-image">
                                        <img src={item.img} alt={`Client ${i + 1}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-wrapper">
  <div className="tell-us-box">
    <h2 className="tell-us-title">
      Tell us about your project
    </h2>

    <div className="main-button">
      <a 
        href="/contact#contact-form" 
        className="theme-btn style-one"
      >
        <span className="text-flip">
          <span className="text">Get a Free Quote</span>
          <span className="text">Get a Free Quote</span>
        </span>
      </a>
      <a
        href="https://wa.me/923454943966"
        target="_blank"
        rel="noopener noreferrer"
        className="theme-btn style-one"
        style={{ marginLeft: "12px", background: "#25D366" }}
      >
        <span className="text-flip">
          <span className="text">WhatsApp Us</span>
          <span className="text">WhatsApp Us</span>
        </span>
      </a>
    </div>
  </div>
</div>

        </section>
    );
};

export default Brand4;
