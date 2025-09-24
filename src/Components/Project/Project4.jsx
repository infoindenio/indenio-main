import React from 'react';
import ProjectCard3 from '../Card/ProjectCard3';

const Project4 = () => {
    return (
        <section className="agenko-project pt-130 pb-100">
            <div className="container-fluid">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <ProjectCard3
                                    img="/assets/images/pages/project/project1.jpeg"
                                    title="Web Development"
                                    content="Fast, scalable, and responsive websites."
                                />
                            </div>
                            <div className="col-lg-6">
                                <ProjectCard3
                                    img="/assets/images/pages/project/project2.jpeg"
                                    title="Mobile App Development"
                                    content="Engaging apps for Android & iOS."
                                />
                            </div>
                            <div className="col-lg-6">
                                <ProjectCard3
                                    img="/assets/images/pages/project/project3.jpeg"
                                    title="E-commerce Solutions"
                                    content="Secure and user-friendly online stores."
                                />
                            </div>
                            <div className="col-lg-12">
                                <ProjectCard3
                                    img="/assets/images/pages/project/project4.jpeg"
                                    title="Custom Software"
                                    content="Tailored software for your business."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <ProjectCard3
                                    img="/assets/images/pages/project/project5.jpeg"
                                    title="UI/UX Design"
                                    content="Clean and user-focused designs."
                                />
                            </div>
                            <div className="col-lg-6">
                                <ProjectCard3
                                    img="/assets/images/pages/project/project6.jpeg"
                                    title="Branding"
                                    content="Unique and memorable brand identity."
                                />
                            </div>
                            <div className="col-lg-12">
                                <ProjectCard3
                                    img="/assets/images/pages/project/project7.jpeg"
                                    title="Stationary Work"
                                    content="Professional business print designs."
                                />
                            </div>
                            <div className="col-lg-12">
                                <ProjectCard3
                                    img="/assets/images/pages/project/project8.jpeg"
                                    title="Marketing"
                                    content="Boost reach with SEO & social media."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project4;
