import React from 'react';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import About1 from '../Components/About/About1';
import Services2 from '../Components/Services/Services2';
import Project2 from '../Components/Project/Project2';
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre';
import Process2 from '../Components/Process/Process2';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import Faq1 from '../Components/Faq/Faq1';
// import Team1 from '../Components/Team/Team1';
import Brand2 from '../Components/Brand/Brand2';
// import Blog2 from '../Components/Blog/Blog2';

const Home2 = () => {
    return (
        <div>
            <HeroBanner2></HeroBanner2>
            <About1></About1>
            <Services2></Services2>
            <Project2></Project2>
            <WhoWeAre></WhoWeAre>
            <Process2></Process2>
            <Testimonial2></Testimonial2>
            <Faq1></Faq1>
            {/* <Team1></Team1> */}
            <Brand2></Brand2>
            {/* <Blog2></Blog2> */}
        </div>
    );
};

export default Home2;