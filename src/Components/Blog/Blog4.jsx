import React from 'react';
import { Link } from 'react-router-dom';

const Blog4 = () => {

    const blogContent = [
        {
            img: '/assets/images/pages/blog/blog1.jpg',
            title: 'Why a Website?',
            content: 'A website is affordable, SEO-friendly, and accessible — perfect for startups and small businesses.',
            link: '/blog/web-blog-details'
        },
        {
            img: '/assets/images/pages/blog/blog2.jpg',
            title: 'Why a Mobile App?',
            content: 'A mobile app boosts engagement, loyalty, and retention with personalized user experiences.',
            link: '/blog/mobile-blog-details'
        },
        {
            img: '/assets/images/pages/blog/blog3.jpg',
            title: 'Which One Should You Choose?',
            content: 'Startups → Website, Customer-focused → Mobile App, Growing brands → Both for maximum impact.',
            link: '/blog/why-blog-details'
        },
    ]; 

    return (
        <section className="agenko-blog-grid pt-130 pb-80">
            <div className="container">
                <div className="row">
                    {blogContent.map((item, i) => (
                        <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                            <div className="agenko-blog-item style-four mb-40 pf_fadeup">
                                <div className="post-thumbnail">
                                    <img src={item.img} alt="Post Thumbnail" />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span><i className="bi bi-person"></i>Admin</span>
                                        <span><i className="bi bi-calendar-fill"></i>Dec 12, 2024</span>
                                        <span><i className="bi bi-chat"></i>3 Comments</span>
                                    </div>
                                    <h4 className="title">
                                        <Link to={item.link}>{item.title}</Link>
                                    </h4>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    );
};

export default Blog4;
