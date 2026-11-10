import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import About1 from '../Components/About/About1';
import WhoWeAre2 from '../Components/WhoWeAre/WhoWeAre2';
// import Team1 from '../Components/Team/Team1'; // team section removed
import ClientResults from '../Components/ClientResults/ClientResults';
// import Testimonial4 from '../Components/Testimonial/Testimonial4'; // hidden until real client reviews are added
import Brand4 from '../Components/Brand/Brand4';

const AboutPage = () => {
    return (
        <div>
            <BreadCumb
                Title="About Us"
                content="Indenio drives growth through smart technology & modern digital solutions"
            ></BreadCumb>
            <About1></About1>
            <WhoWeAre2></WhoWeAre2>
            {/* <Team1></Team1> */}
            <ClientResults></ClientResults>
            {/* <Testimonial4></Testimonial4> */}
            <Brand4></Brand4>
        </div>
    );
};

export default AboutPage;