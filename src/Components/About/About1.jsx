import React from 'react';
import { Link } from 'react-router-dom';

const About1 = () => {
    return (
        <section className="agk-about pt-130 pb-80">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    
                    <div className="agk-content-box style-one mb-50 pf_fadeup">
                        <div className="section-title mb-20">
                            <span className="sub-title">About us</span>
                            <h2>Innovative digital growth  
                            driven by Indenio Agency!</h2>
                        </div>
                        <p>Indenio builds custom websites, online stores and apps, gets them ranking on Google and runs marketing that brings in real enquiries. From gym chains in Norway to solar companies in Australia and e-commerce brands in the UK, we help businesses grow online.</p>
                        <p>You work directly with the people designing, coding and marketing your project, with fast replies on WhatsApp and clear progress at every step.</p>
                        <div className="agk-button mb-30">
                            <Link to="/about" className="theme-btn style-one">
                                <span className="text-flip">
                                    <span className="text">LEARN MORE</span>
                                    <span className="text">LEARN MORE</span>
                                </span>
                            </Link>
                        </div>
                        <ul>
                            <li>
                                <div className="agenko-counter-box style-one">
                                    <div className="content">
                                        <h2 className="mb-10"><span className="count">240</span>+</h2>
                                        <p>Projects delivered</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="agenko-counter-box style-one">
                                    <div className="content">
                                        <h2 className="mb-10"><span className="count">5</span></h2>
                                        <p>Countries served</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                            <img src="/assets/svg/about.svg" alt="img" />
                        </div>
                        <div className="agenko-experince-box style-one">
                            <h2><span>10</span>+</h2>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;
