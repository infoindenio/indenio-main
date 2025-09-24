import React from 'react';
import { Link } from 'react-router-dom';

const Services4 = () => {

    const serviceContent = [
        {
            img: '/assets/images/pages/service/card-img1.jpeg',
            title: 'Development',
            subTitle: 'Web & App Solutions',
            content: 'Indenio delivers innovative and scalable development services, creating high-performance, user-friendly web and mobile solutions tailored to your business needs.',
            link: '/service/development'
        },
        {
            img: '/assets/images/pages/service/card-img2.jpeg',
            title: 'UI/UX Design',
            subTitle: 'Creative & User-Centric',
            content: 'Indenio crafts intuitive and visually stunning UI/UX designs, focusing on seamless user journeys that enhance engagement and elevate digital experiences.',
            link: '/service/uiux'
        },
        {
            img: '/assets/images/pages/service/card-img3.jpeg',
            title: 'Graphics',
            subTitle: 'Branding & Visual Identity',
            content: 'Indenio provides impactful graphic design solutions, from branding to visual storytelling, helping businesses communicate effectively and stand out with creativity.',
            link: '/service/graphics'
        },
        {
            img: '/assets/images/pages/service/card-img4.jpeg',
            title: 'Marketing',
            subTitle: 'Digital Growth Strategies',
            content: 'Indenio offers data-driven marketing services, including SEO and social campaigns, designed to boost visibility, drive conversions, and accelerate business growth.',
            link: '/service/marketing'
        },
    ];

    return (
        <section class="agk-services">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title mb-60 text-center pf_zoomIn">
                            <span class="sub-title">Our Service</span>
                            <h2>Top Services We Offer</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        {serviceContent.map((item, i) => (
                            <div key={i} class="agenko-card-item style-two mb-10 pf_fadeup">
                                <div class="thumbnail">
                                    <img src={item.img} alt="Card Image" />
                                </div>
                                <div class="card-title">
                                    <h2><Link to={item.link}>{item.title}</Link></h2>
                                    <h4>{item.subTitle}</h4>
                                </div>
                                <div class="content">
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services4;
