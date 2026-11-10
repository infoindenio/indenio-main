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
                                A Simple Process, <br />
                                From Idea to Launch
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-55 pf_fadeup">
                            <p>
                                You always know what is happening, what comes next and
                                when it will be ready, with updates on WhatsApp at
                                every step.
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
                                <h4 className="title">Discovery Call</h4>
                                <p>
                                    A quick call to understand your business, customers and goals, then a clear plan and quote.
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
                                <h4 className="title">Design Approval</h4>
                                <p>
                                    You see and approve the design before any code is written, so there are no surprises.
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
                                <h4 className="title">Build & Optimise</h4>
                                <p>
                                    We develop your site with speed, mobile and SEO built in, then test it on every device.
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
                                <h4 className="title">Launch & Grow</h4>
                                <p>
                                    We go live, set up tracking and keep growing your traffic and leads with SEO and ads.
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
