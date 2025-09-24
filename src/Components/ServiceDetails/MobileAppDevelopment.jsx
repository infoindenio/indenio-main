import React from 'react';

const Mobile = () => {
    return (
        <section className="agenko-service-details pt-130 pb-80">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-iamge-box mb-70 pf_zoomIn">
                                <div className="agenko-image">
                                    <img src="/assets/images/pages/service/single-service1.jpeg" alt="Indenio Mobile App Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Description</span>
                                    <h2>Mobile App Development</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="agenko-counter-item">
                                            <div className="content">
                                                <h2><span className="count">2000</span>+</h2>
                                                <p>Apps Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="agenko-counter-item">
                                            <div className="content">
                                                <h2><span className="count">98</span>%</h2>
                                                <p>Positive Reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <p className="mb-20">Indenio develops cutting-edge mobile apps that connect businesses with customers anywhere, anytime. Our solutions are fast, secure, and user-friendly.</p>
                                <p className="mb-20">We create feature-rich iOS and Android apps designed to improve engagement, streamline services, and deliver long-term growth.</p>
                                <ul className="check-list style-one">
                                    <li><i className="flaticon-check"></i>iOS & Android Development</li>
                                    <li><i className="flaticon-check"></i>User-Centered Design</li>
                                    <li><i className="flaticon-check"></i>Seamless Integrations</li>
                                    <li><i className="flaticon-check"></i>High Performance & Security</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mobile;
