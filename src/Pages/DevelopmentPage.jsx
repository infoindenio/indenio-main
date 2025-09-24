import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Development from '../Components/ServiceDetails/Development';
import DevelopmentProcess from '../Components/Process/DevelopmentProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const DevelopmentPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Development"
                content="Indenio delivers expert development services with web, mobile, e-commerce & software solutions"
            ></BreadCumb>  
            <Development></Development> 
            <DevelopmentProcess></DevelopmentProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default DevelopmentPage;