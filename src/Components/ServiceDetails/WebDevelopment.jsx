import React from 'react';

const Web = () => {
    return (
        <section className="agenko-service-details pt-130 pb-80">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-iamge-box mb-70 pf_zoomIn">
                                <div className="agenko-image">
                                    <img src="/assets/svg/banner-web.svg" alt="Indenio Web Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Description</span>
                                    <h2>Web Development Excellence</h2>
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
                                <p className="mb-20">Indenio builds scalable, modern websites that enhance brand presence and deliver seamless digital experiences. Our focus is innovation, performance, and user engagement.</p>
                                <p className="mb-20">From dynamic business websites to complex platforms, our web development solutions are tailored to your goals and ensure long-term success.</p>
                                <ul className="check-list style-one">
                                    <li><i className="flaticon-check"></i>Custom Web Solutions</li>
                                    <li><i className="flaticon-check"></i>Responsive & SEO-Optimized</li>
                                    <li><i className="flaticon-check"></i>Scalable & Secure Development</li>
                                    <li><i className="flaticon-check"></i>Results-Driven Digital Strategies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Web;
