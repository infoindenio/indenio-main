import React from 'react';

const Branding = () => {
    return (
        <section className="agenko-service-details pt-130 pb-80">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-iamge-box mb-70 pf_zoomIn">
                                <div className="agenko-image">
                                    <img src="/assets/svg/banner-branding.svg" alt="Indenio Branding Services" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Description</span>
                                    <h2>Branding</h2>
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
                                <p className="mb-20">
                                    At Indenio, we help businesses build a strong, recognizable identity that truly connects with their audience. From logos to brand strategy, our goal is to create a lasting impression.
                                </p>
                                <p className="mb-20">
                                    Our branding services focus on defining your unique voice, visual style, and story. We craft professional designs and strategies that ensure your brand stands out in competitive markets.
                                </p>
                                <ul className="check-list style-one">
                                    <li><i className="flaticon-check"></i>Creative Logo & Identity Design</li>
                                    <li><i className="flaticon-check"></i>Comprehensive Brand Strategy</li>
                                    <li><i className="flaticon-check"></i>Consistent Visual Branding</li>
                                    <li><i className="flaticon-check"></i>Memorable Brand Experiences</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branding;
