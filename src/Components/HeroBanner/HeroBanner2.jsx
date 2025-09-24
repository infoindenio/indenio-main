import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner2 = () => {
    return (
        <section className="agk-hero">
        <div className="hero-wrapper-two">
            <div className="shape shape-one"><span><img className="flowerrotate360" src="/assets/images/digital-agency/hero/shape/shape1.png" alt="Shape" width={60} /></span></div>
            <div className="shape shape-two"><span><img className="animate-float-bob-y" src="/assets/images/digital-agency/hero/shape/shape2.png" alt="Shape" /></span></div>
            <div className="shape circle-one"><span></span></div>
            <div className="shape circle-two"><span></span></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <h1>
                                <span className="text-anm">Digital Modern</span>
                                <span className="text-anm">Agency</span>
                            </h1>
                            {/* <div className="pro">Pro</div> */}
                            <div className="text-box text-box-home pf_fadeup">
                                <p><span>Indenio,</span> we deliver creative digital solutions across design, technology, marketing, and e-commerce to help businesses grow and lead in the future.</p>
                                <div className="hero-button">
                                    <Link to="/about" className="theme-btn style-one">
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
                <div className="row">
                    <div className="col-lg-4">
                        <ul className="service-list pf_fadeup">
                            <li>
                                
                                <Link to="/service/web" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-browser-edge"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Web Development</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link to="/service/mobile" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-code-square"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Mobile App Development</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link to="/service/ecommerce" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-lightbulb"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">E-commerce Solutions</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                                <Link to="/service/software" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-megaphone"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Custom Software Development</h4>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        
                        <div className="hero-image style-one pf_fadeup">
                            <img src="/assets/images/digital-agency/hero/hero-img1.jpg" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanner2;