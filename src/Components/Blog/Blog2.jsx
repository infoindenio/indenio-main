import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Blog2 = () => {

    const blogContent = [
        {
            img: '/assets/images/digital-agency/blog/blog1.png',
            title: 'Why a Website?',
            link: '/blog/web-blog-details',
            authorImg: '/assets/images/digital-agency/blog/author1.png'
        },
        {
            img: '/assets/images/digital-agency/blog/blog1.png',
            title: 'Why a Mobile App?',
            link: '/blog/mobile-blog-details',
            authorImg: '/assets/images/digital-agency/blog/author2.png'
        },
        {
            img: '/assets/images/digital-agency/blog/blog3.png',
            title: 'Which One Should You Choose?',
            link: '/blog/why-blog-details',
            authorImg: '/assets/images/digital-agency/blog/author3.png'
        },
    ]; 

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="agk-blogs pt-130 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">Latest Blog</span>
                            <h2>Our Global Client</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="agk-button float-lg-end mb-60 pf_fadeup">
                            <a href="blog-grid.html" className="theme-btn style-one">
                                <span className="text-flip">
                                    <span className="text">View All Blogs</span>
                                    <span className="text">View All Blogs</span>
                                </span>
                            </a>
                        </div>    
                    </div>
                </div>
                <div className="row">
                    {blogContent.map((item, i) => (
                        <div key={i} className="col-lg-12">
                            <div className="agenko-blog-item style-one mb-40 pf_fadeup">
                                <div className="post-hover-wrap bg_cover" data-background={item.img}>
                                    <div className="agk-button">
                                        <Link to={item.link} className="theme-btn style-one">
                                            <span className="text-flip">
                                                <span className="text">Read More</span>
                                                <span className="text">Read More</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="post-inner-wrap">
                                    <div className="author-item">
                                        <div className="author-thumb">
                                            <img src={item.authorImg} alt="Author Image" />
                                        </div>
                                        <div className="author-info">
                                            <span>Posted By</span>
                                            <h4>Indenio Team</h4>
                                        </div>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="title"><Link to={item.link}>{item.title}</Link></h3>
                                        <p>{item.content}</p>
                                        <div className="post-categories">
                                            <a href="#">Business</a>
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>
                                    <div className="post-date">
                                        <i className="bi bi-calendar-check"></i>
                                        <a href="#">10 September 2025</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog2;
