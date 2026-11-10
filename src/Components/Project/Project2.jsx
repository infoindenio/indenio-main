import React from 'react';
import { Link } from 'react-router-dom';

const Project2 = () => {

    const chooseContent = [
        {
            img:'/assets/svg/project-fitnesspoint-card.svg',
            title:'Fitnesspoint — Gym Chain, Norway',
            cat1:'Website',
            cat2:'Gym & Fitness',
            link:'https://www.fitnesspoint.no'
        },
        {
            img:'/assets/svg/project-integra-au-card.svg',
            title:'Integra Energy Group — Australia',
            cat1:'Website',
            cat2:'Solar Energy',
            link:'https://integrasolar.com.au'
        },
        {
            img:'/assets/svg/project-dreamcraftfurniture-card.svg',
            title:'DreamCraft Furniture — UK',
            cat1:'WooCommerce',
            cat2:'Meta Ads',
            link:'https://dreamcraftfurniture.net'
        },
        {
            img:'/assets/svg/project-securiwise-card.svg',
            title:'Securiwise — Security Services, UK',
            cat1:'Website',
            cat2:'Security',
            link:'https://securiwise.co.uk'
        },
    ]; 

    return (
        <section className="agk-project pt-130 pb-80">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    
                    <div className="section-title mb-60 pf_fadeup">
                        <span className="sub-title">Our Work</span>
                        <h2>Latest Websites We've 
                            Built &amp; Grown</h2>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="agk-button mb-60 float-lg-end pf_fadeup">
                        <Link to="/project" className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">View All Work</span>
                                <span className="text">View All Work</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
            {chooseContent.map((item, i) => (
                <div key={i} className="col-lg-6">
                    <div className="agenko-project-item style-one mb-45 pf_fadeup">
                        <div className="thumbnail">
                            <img src={item.img} alt={item.title} />
                            <div className="project-button">
                                <a href={item.link} target="_blank" rel="noopener noreferrer"><i className="bi bi-arrow-up-right"></i></a>
                            </div>
                        </div>
                        <div className="content">
                            <div className="project-categories">
                                <Link to="/project">{item.cat1}</Link>
                                <Link to="/project">{item.cat2}</Link>
                            </div>
                            <h4 className="title"><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h4>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
    );
};

export default Project2;
