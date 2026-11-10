import React from 'react';

const Development = () => {
    return (
        <section className="agenko-service-details pt-130 pb-80">
            <div className="container">
                <div className="service-details-wrapper">
                    {/* Image Section (Reduced for cleaner layout) */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-image text-center mb-50 pf_zoomIn">
                                <img
                                    src="/assets/svg/banner-development.svg"
                                    alt="Indenio Development Services"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="row align-items-center">
                        {/* Left Side - Counters */}
                        <div className="col-lg-6 col-md-12">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-40">
                                    <span className="sub-title">Description</span>
                                    <h2>Development</h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 mb-4">
                                        <div className="agenko-counter-item">
                                            <div className="content">
                                                <h2><span className="count">240</span>+</h2>
                                                <p>Projects Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-4">
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

                        {/* Right Side - Description & Services */}
                        <div className="col-lg-6 col-md-12">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <p className="mb-20">
                                    At Indenio, we transform ideas into powerful digital solutions. 
                                    Our development services are designed to empower businesses with 
                                    secure, scalable, and future-ready technology.
                                </p>
                                <p className="mb-20">
                                    From building seamless web platforms to crafting innovative apps 
                                    and enterprise software, we focus on delivering solutions that drive 
                                    long-term success and growth.
                                </p>
                                <ul className="check-list style-one">
                                    <li><i className="flaticon-check"></i> Web Development</li>
                                    <li><i className="flaticon-check"></i> Mobile App Development</li>
                                    <li><i className="flaticon-check"></i> E-commerce Solutions</li>
                                    <li><i className="flaticon-check"></i> Custom Software Solutions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Development;
