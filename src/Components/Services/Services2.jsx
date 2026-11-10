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
                            <h2>Everything You Need 
                                to Grow Online</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-60 pf_fadeup">
                            <p>Hire us for one service or let one team handle it all: build the website, get it ranking on Google and market it to the right customers.</p>
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
                                <p>Fast, mobile-friendly <span>custom WordPress websites</span> and landing pages built around your business, never squeezed into a template.</p>
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
                                <h3 className="title">SEO &amp; Google Ranking</h3>
                            </div>
                            <div className="content">
                                <p>Technical audits, on-page optimisation, <span>local SEO</span> and blog content that get you found by customers already searching for you.</p>
                            </div>
                            <div className="card-button">
                                <Link to="/service/seo" className="theme-btn style-one">
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
                                <h3 className="title">E-commerce Stores</h3>
                            </div>
                            <div className="content">
                                <p><span>WooCommerce stores</span> with Stripe payments, custom product options and clean checkouts that turn visitors into orders.</p>
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
                                <h3 className="title">Social Media &amp; Paid Ads</h3>
                            </div>
                            <div className="content">
                                <p>On-brand posts and reels plus <span>Meta and Google Ads</span> campaigns with proper Pixel tracking, built to bring leads, bookings and sales.</p>
                            </div>
                            <div className="card-button">
                                <Link to="/service/media" className="theme-btn style-one">
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
