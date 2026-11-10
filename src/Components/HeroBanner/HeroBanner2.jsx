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
                                <span className="text-anm">Web &amp; Growth</span>
                                <span className="text-anm">Agency</span>
                            </h1>
                            {/* <div className="pro">Pro</div> */}
                            <div className="text-box text-box-home pf_fadeup">
                                <p><span>Indenio</span> builds custom websites, ranks them on Google and runs marketing that brings real enquiries to businesses worldwide.</p>
                                <div className="hero-button">
                                    <Link to="/contact" className="theme-btn style-one">
                                        <span className="text-flip">
                                            <span className="text">FREE CONSULTATION</span>
                                            <span className="text">FREE CONSULTATION</span>
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
                                
                                <Link to="/service/seo" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-search"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">SEO &amp; Google Ranking</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link to="/service/ecommerce" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-cart3"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">E-commerce Stores</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                                <Link to="/service/media" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-megaphone"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Social Media &amp; Ads</h4>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        
                        <div className="hero-image style-one pf_fadeup">
                            <img src="/assets/svg/hero.svg" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanner2;