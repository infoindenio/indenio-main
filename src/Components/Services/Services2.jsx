import React from 'react';
import { Link } from 'react-router-dom';

const Services2 = () => {
    return (
        <section className="agk-services gray-dark pt-130 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-65 pf_fadeup">
                            <span className="sub-title">Our Services</span>
                            <h2>Building Tomorrow's Digital 
                                Experiences Today</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-60 pf_fadeup">
                            <p>Delivering advanced digital solutions that combine technology, creativity, and strategy to empower modern businesses for the future.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-lg-12">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">01</div>
                                <h3 className="title">Web Development</h3>
                            </div>
                            <div className="content">
                                <p>Custom <span>web development</span> crafted to build scalable, high-performance websites that enhance user experience and support business growth seamlessly.</p>
                            </div>
                            <div className="card-button">
                                <Link to="/service/web" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">02</div>
                                <h3 className="title">Mobile App Development</h3>
                            </div>
                            <div className="content">
                                <p>End-to-end <span>mobile app development</span> solutions delivering seamless performance, intuitive design, and functionality across iOS and Android platforms.</p>
                            </div>
                            <div className="card-button">
                                <Link to="/service/mobile" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">03</div>
                                <h3 className="title">E-commerce Solutions</h3>
                            </div>
                            <div className="content">
                                <p>Complete <span>e-commerce platforms</span> designed to optimize shopping experiences, boost conversion rates, and simplify online business operations.</p>
                            </div>
                            <div className="card-button">
                                <Link to="/service/ecommerce" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">04</div>
                                <h3 className="title">Custom Software Development</h3>
                            </div>
                            <div className="content">
                                <p>Bespoke <span>software solutions</span> engineered to meet unique business needs, streamline workflows, and drive efficiency with reliable technology.</p>
                            </div>
                            <div className="card-button">
                                <Link to="/service/software" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services2;
