import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Branding from '../Components/ServiceDetails/Branding';
import BrandProcess from '../Components/Process/BrandingProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const BrandPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Branding"
                content="Indenio delivers strategic branding solutions with identity design & market growth"
            ></BreadCumb>  
            <Branding></Branding> 
            <BrandProcess></BrandProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default BrandPage;