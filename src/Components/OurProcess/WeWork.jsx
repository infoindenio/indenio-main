import React from 'react';
import { Link } from 'react-router-dom';

const WhatWeWork = () => {
    return (
        <section className="agk-about pt-80 pb-80">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    
                    <div className="agk-content-box style-one mb-50 pf_fadeup">
                        <div className="section-title mb-20">
                            <span className="sub-title">What We Work</span>
                            <h2>
                  Building Tomorrow’s <br /> Digital Experiences Today
                </h2>
              </div>
              <p>
                At <strong>Indenio</strong>, we specialize in delivering innovative 
                digital solutions that merge creativity, strategy, and technology. 
                Our mission is to help businesses scale faster, stand out in competitive 
                markets, and achieve sustainable growth.
              </p>
              <p>
                From web platforms to mobile applications, e-commerce, and custom 
                software, our expert team designs and develops powerful digital 
                experiences that drive measurable results and long-term success.
              </p>
                        <div className="agk-button mb-30">
                            <Link to="/about" className="theme-btn style-one">
                                <span className="text-flip">
                                    <span className="text">DISCOVER MORE</span>
                                    <span className="text">DISCOVER MORE</span>
                                </span>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                            <img src="/assets/images/digital-agency/about/wework.jpg" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default WhatWeWork;
