import React from 'react';

const Graphics = () => {
    return (
        <section className="agenko-service-details pt-130 pb-80">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-iamge-box mb-70 pf_zoomIn">
                                <div className="agenko-image">
                                    <img 
                                        src="/assets/images/pages/service/graphics.jpeg" 
                                        alt="Indenio Graphics Services - Branding & Stationary Work" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        {/* Left Side - Counters */}
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Description</span>
                                    <h2>Graphics</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="agenko-counter-item">
                                            <div className="content">
                                                <h2><span className="count">3000</span>+</h2>
                                                <p>Designs Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="agenko-counter-item">
                                            <div className="content">
                                                <h2><span className="count">100</span>%</h2>
                                                <p>Creative Excellence</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <p className="mb-20">
                                    Indenio delivers professional graphics that bring your brand to life with clarity and impact. 
                                    Our designs are modern, memorable, and aligned with your business identity. 
                                </p>
                                <p className="mb-20">
                                    We specialize in creative branding and stationary work tailored to your needs, 
                                    ensuring consistency, professionalism, and long-term brand recognition.
                                </p>
                                <ul className="check-list style-one">
                                    <li><i className="flaticon-check"></i>Unique Branding Solutions</li>
                                    <li><i className="flaticon-check"></i>Professional Stationary Designs</li>
                                    <li><i className="flaticon-check"></i>Creative & Impactful Visuals</li>
                                    <li><i className="flaticon-check"></i>Client-Focused Approach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Graphics;
