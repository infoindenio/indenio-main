import React from 'react';

const BlogDetails = () => {
    return (
        <section className="agenko-blog-detils pt-130 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        
                        <div className="blog-details-wrapper">
                            <div className="agenko-post-item pf_fadeup">
                                <div className="main-post">
                                    <div className="post-thumbnail">
                                        <img src="/assets/images/pages/blog/blog-single1.jpg" alt="Blog Image" />
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span><i className="bi bi-person"></i>Admin</span>
                                            <span><i className="bi bi-calendar-fill"></i>Dec 12, 2024</span>
                                            <span><i className="bi bi-chat"></i>3 Comments</span>
                                        </div>
                                        <h4 className="post-title">Why a Mobile App?</h4>
                                        <p>
                                            A mobile app offers a personalized and interactive experience. 
                                            It allows direct communication with customers through push notifications 
                                            and ensures loyalty with features like saved preferences and one-click purchasing.
                                        </p>
                                        <h4>Best for</h4>
                                        <p>
                                            Businesses with repeat customers such as <b>e-commerce</b>, 
                                            <b> food delivery</b>, <b>fitness</b>, and <b>banking</b>.
                                        </p>
                                        <h4>Benefits</h4>
                                        <ul className="check-list style-one">
                                            <li><i className="bi bi-check2-square"></i> Stronger engagement</li>
                                            <li><i className="bi bi-check2-square"></i> Offline access</li>
                                            <li><i className="bi bi-check2-square"></i> Higher customer retention</li>
                                        </ul>
                                        <h4>Example</h4>
                                        <p>
                                            A food delivery service uses an app to send offers and encourage repeat orders, 
                                            strengthening customer loyalty and increasing sales.
                                        </p>
                                    </div>
                                </div>
                                <div className="entry-footer wow fadeInUp">
                                    <div className="tag-links">
                                        <span>Tag:</span>
                                        <a href="#">Mobile App</a>
                                        <a href="#">Business</a>
                                        <a href="#">Engagement</a>
                                    </div>
                                    <div className="social-share">
                                        <span>share:</span>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="comments-area mt-60 mb-50 pf_fadeup">
                                <h3 className="comments-title">Popular Comments</h3>
                                <ul className="comments-list">
                                    <li>
                                        <div className="comment">
                                            <div className="comment-avatar">
                                                <img src="/assets/images/pages/blog/comment1.jpg" alt="comment author" />
                                            </div>
                                            <div className="comment-wrap">
                                                <div className="comment-author-content">
                                                    <span className="author-name">Sarah John</span>
                                                    <p>
                                                        Mobile apps truly help businesses connect directly with their customers. 
                                                        Push notifications are game changers for engagement.
                                                    </p>
                                                    <a href="#" className="reply">Reply</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-avatar">
                                                <img src="/assets/images/pages/blog/comment2.jpg" alt="comment author" />
                                            </div>
                                            <div className="comment-wrap">
                                                <div className="comment-author-content">
                                                    <span className="author-name">David Lee</span>
                                                    <p>
                                                        Totally agree! Food delivery apps make it so easy for me to reorder meals 
                                                        without any hassle.
                                                    </p>
                                                    <a href="#" className="reply">Reply</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="agenko-contact-form style-two mb-30 pf_fadeup">
                                <h3 className="comments-heading mb-25">Leave a Comment</h3>
                                <form className="comment-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="Enter Name" name="name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form_control" rows="4" placeholder="Write Comments"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="theme-btn style-two">Post Your Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        
                        <div className="sidebar-widget-area">
                            
                            <div className="sidebar-widget sidebar-search-widget mb-30 pf_fadeup">
                                <div className="widget-content">
                                    <h4 className="sidebar-title">Search</h4>
                                    <form>
                                        <div className="form-group">
                                            <input type="search" className="form_control" placeholder="Search here..." name="search" required />
                                            <button className="search-btn"><i className="bi bi-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                            <div className="sidebar-widget sidebar-category-widget mb-30 pf_fadeup">
                                <div className="widget-content">
                                    <h4 className="sidebar-title">Categories</h4>
                                    <ul className="widget-nav">
                                        <li><a href="#">Mobile App <span>(05)</span></a></li>
                                        <li><a href="#">E-commerce <span>(03)</span></a></li>
                                        <li><a href="#">Food Delivery <span>(06)</span></a></li>
                                        <li><a href="#">Banking  <span>(08)</span></a></li>
                                        <li><a href="#">Fitness  <span>(04)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="sidebar-widget sidebar-post-widget mb-30 pf_fadeup">
                                <div className="widget-content">
                                    <h4 className="sidebar-title">Recent Post</h4>
                                    <ul className="recent-post-list">
                                        <li className="post-thumbnail-content">
                                            <img src="/assets/images/pages/blog/post-thumb1.jpg" alt="post thumb" />
                                            <div className="post-title-date">
                                                <span><a href="#">Food Delivery</a></span>
                                                <h6><a href="#">How push notifications boost reorders</a></h6>
                                            </div>
                                        </li>
                                        <li className="post-thumbnail-content">
                                            <img src="/assets/images/pages/blog/post-thumb2.jpg" alt="post thumb" />
                                            <div className="post-title-date">
                                                <span><a href="#">Banking</a></span>
                                                <h6><a href="#">Mobile banking apps improving trust</a></h6>
                                            </div>
                                        </li>
                                        <li className="post-thumbnail-content">
                                            <img src="/assets/images/pages/blog/post-thumb3.jpg" alt="post thumb" />
                                            <div className="post-title-date">
                                                <span><a href="#">E-commerce</a></span>
                                                <h6><a href="#">One-click purchase for higher sales</a></h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="sidebar-widget sidebar-tag-widget pf_fadeup mb-30">
                                <div className="widget-content">
                                    <h4 className="sidebar-title">Popular Tags</h4>
                                    <div className="tagcloud">
                                        <a href="#">Mobile App</a>
                                        <a href="#">Push Notifications</a>
                                        <a href="#">E-commerce</a>
                                        <a href="#">Banking</a>
                                        <a href="#">Food Delivery</a>
                                        <a href="#">Customer Retention</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
