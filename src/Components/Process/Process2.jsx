import React from 'react';

const Process2 = () => {
    return (
        <section className="agk-work-process pt-130 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">Work Process</span>
                            <h2>
                                How Indenio Ensures <br />
                                Innovation & Productivity
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-55 pf_fadeup">
                            <p>
                                At Indenio, we merge creativity with technology to build
                                scalable solutions that empower businesses and deliver
                                measurable value for tomorrow’s challenges.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Step 01 */}
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-two mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-binoculars"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Discovery & Strategy</h4>
                                <p>
                                    In-depth research and strategic roadmaps to shape
                                    impactful digital transformation journeys.
                                </p>
                                <div className="step">Step-01</div>
                            </div>
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-two mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-palette2"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Design & Prototyping</h4>
                                <p>
                                    Modern, user-centric designs and prototypes aligned
                                    with brand identity and usability.
                                </p>
                                <div className="step">Step-02</div>
                            </div>
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-two mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-shield-check"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Testing & Validation</h4>
                                <p>
                                    Rigorous testing and validation processes ensure
                                    reliability, performance, and quality.
                                </p>
                                <div className="step">Step-03</div>
                            </div>
                        </div>
                    </div>

                    {/* Step 04 */}
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-two mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-headset"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Support & Growth</h4>
                                <p>
                                    Dedicated support and continuous optimization to help
                                    businesses scale.
                                </p>
                                <div className="step">Step-04</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process2;
