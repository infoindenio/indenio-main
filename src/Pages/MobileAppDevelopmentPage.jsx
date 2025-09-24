import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Mobile from '../Components/ServiceDetails/MobileAppDevelopment';
import MobileProcess from '../Components/Process/MobileAppDevelopmentProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const MobilePage = () => {
    return (
        <div>
             <BreadCumb
                Title="Mobile App Development"
                content="Indenio builds seamless mobile apps with engaging designs & powerful technologies"
            ></BreadCumb>  
            <Mobile></Mobile> 
            <MobileProcess></MobileProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default MobilePage;