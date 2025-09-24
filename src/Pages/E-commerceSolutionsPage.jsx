import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Ecommerce from '../Components/ServiceDetails/E-commerceSolutions';
import EcommerceProcess from '../Components/Process/EcommerceSolutionProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const EcommercePage = () => {
    return (
        <div>
             <BreadCumb
                Title="E-commerce Solutions"
                content="Indenio delivers secure online stores with optimized shopping & growth strategies"
            ></BreadCumb>  
            <Ecommerce></Ecommerce> 
            <EcommerceProcess></EcommerceProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default EcommercePage;