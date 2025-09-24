import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Software from '../Components/ServiceDetails/CustomSoftwareDevelopment';
import SoftwareProcess from '../Components/Process/SoftwareProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const ServiceDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Software Development"
                content="Indenio develops tailored software with innovative features & efficient performance"
            ></BreadCumb>  
            <Software></Software> 
            <SoftwareProcess></SoftwareProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default ServiceDetailsPage;