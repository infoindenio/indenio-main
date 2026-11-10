import React from 'react';

const Software = () => {
    return (
        <section className="agenko-service-details pt-130 pb-80">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-iamge-box mb-70 pf_zoomIn">
                                <div className="agenko-image">
                                    <img src="/assets/svg/banner-software.svg" alt="Indenio Custom Software Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Description</span>
                                    <h2>Custom Software Development</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="agenko-counter-item">
                                            <div className="content">
                                                <h2><span className="count">240</span>+</h2>
                                                <p>Projects Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="agenko-counter-item">
                                            <div className="content">
                                                <h2><span className="count">10</span>+</h2>
                                                <p>Years of Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <p className="mb-20">Indenio delivers customized software designed to meet your business challenges with precision. Our solutions are scalable, secure, and business-driven.</p>
                                <p className="mb-20">We specialize in innovative software development tailored to your needs, ensuring long-term efficiency and growth.</p>
                                <ul className="check-list style-one">
                                    <li><i className="flaticon-check"></i>Custom-Built Applications</li>
                                    <li><i className="flaticon-check"></i>Innovative Business Solutions</li>
                                    <li><i className="flaticon-check"></i>Secure & Scalable Platforms</li>
                                    <li><i className="flaticon-check"></i>Client-Centered Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Software;
