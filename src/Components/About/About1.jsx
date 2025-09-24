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
                        <p>At Indenio, we focus on creating powerful digital solutions designed to accelerate business success. By blending creativity, technology, and strategy, we enable brands to stand out and achieve their long-term vision with confidence.</p>
                        <p>Our professional team partners with clients to understand their needs in depth, delivering tailored strategies that generate measurable growth and lasting impact.</p>
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
                                        <p>Projects success rate 99%</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="agenko-counter-box style-one">
                                    <div className="content">
                                        <h2 className="mb-10"><span className="count">23</span>+</h2>
                                        <p>Award for digital innovation</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                            <img src="/assets/images/digital-agency/about/about1.jpeg" alt="img" />
                        </div>
                        <div className="agenko-experince-box style-one">
                            <h2><span>24</span>+</h2>
                            <p>Years of Digital Expertise</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;
