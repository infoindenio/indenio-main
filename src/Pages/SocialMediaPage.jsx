import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Social from '../Components/ServiceDetails/SocialMedia';
import SocialMediaProcess from '../Components/Process/SocialMediaProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const SocialPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Social Media Marketing"
                content="Indenio delivers impactful social media marketing with engagement growth & brand success"
            ></BreadCumb>  
            <Social></Social> 
            <SocialMediaProcess></SocialMediaProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default SocialPage;