import React from 'react';

const Marketing = () => {
    return (
        <section className="agenko-service-details pt-130 pb-80">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-iamge-box mb-70 pf_zoomIn">
                                <div className="agenko-image">
                                    <img 
                                        src="/assets/svg/banner-marketing.svg" 
                                        alt="Indenio Marketing Services - Social Media Marketing & SEO" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Description</span>
                                    <h2>Marketing</h2>
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
                                    Indenio empowers businesses with effective marketing strategies that maximize digital presence. 
                                    Our focus is on driving measurable results through Social Media Marketing and SEO campaigns.
                                </p>
                                <p className="mb-20">
                                    We craft data-driven campaigns tailored to your goals, ensuring stronger visibility, higher engagement, 
                                    and long-term business growth.
                                </p>
                                <ul className="check-list style-one">
                                    <li><i className="flaticon-check"></i>Social Media Marketing Campaigns</li>
                                    <li><i className="flaticon-check"></i>Search Engine Optimization (SEO)</li>
                                    <li><i className="flaticon-check"></i>Brand Awareness & Online Reach</li>
                                    <li><i className="flaticon-check"></i>Performance-Driven Strategies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketing;
