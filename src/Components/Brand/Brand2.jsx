import React from 'react';

const Brand2 = () => {

    const brandContent = [
        {img:'/assets/images/creative-agency/client/clients1.png'},
        {img:'/assets/images/creative-agency/client/clients2.png'},
        {img:'/assets/images/creative-agency/client/clients3.png'},
        {img:'/assets/images/creative-agency/client/clients4.png'},
        {img:'/assets/images/creative-agency/client/clients5.png'},
        {img:'/assets/images/creative-agency/client/clients6.png'},
        {img:'/assets/images/creative-agency/client/clients7.png'},
        {img:'/assets/images/creative-agency/client/clients8.png'},
        {img:'/assets/images/creative-agency/client/clients9.png'},
        {img:'/assets/images/creative-agency/client/clients10.png'},
      ];   

    return (
            <section className="agk-client gray-dark pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center mb-50 pf_zoomIn">
                                <span className="sub-title">Our Client</span>
                                <h2>Brands We Have Worked With</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="client-list pf_fadeup">
                                <ul>
                                {brandContent.map((item, i) => (
                                    <li key={i}>
                                        <div className="agenko-client-item style-one">
                                            <div className="client-image">
                                                <img src={item.img} alt="client img" />
                                            </div>
                                        </div>
                                    </li>
                                    ))} 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Brand2;