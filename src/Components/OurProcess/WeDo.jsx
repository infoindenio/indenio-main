import React from 'react';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
    return (
        <section className="agk-about pt-80 pb-0">
        <div className="container">
            <div className="row">
              <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup mr-35">
                        <div className="agk-image">
                            <img src="/assets/images/digital-agency/about/wedo.png" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-7">
                    
                    <div className="agk-content-box style-one mb-50 pf_fadeup ml-15">
                        <div className="section-title mb-20">
                            <span className="sub-title">What We Do</span>
                            <h2>
                  Digital Transformation <br /> With Innovative Solutions
                </h2>
              </div>
              <p>
                At <strong>Indenio</strong>, we craft impactful digital solutions that 
                combine creativity, strategy, and technology. Our focus is to help 
                businesses grow faster, innovate smarter, and deliver value that lasts.
              </p>
              <p>
                We work across multiple domains — from web development and mobile apps 
                to e-commerce and custom software — ensuring every project we deliver 
                empowers brands to succeed in today’s competitive landscape.
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
                {/* <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                            <img src="/assets/images/digital-agency/about/wedo.png" alt="img" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    );
};

export default WhatWeDo;
