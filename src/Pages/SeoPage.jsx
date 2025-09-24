import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Seo from '../Components/ServiceDetails/Seo';
import SeoProcess from '../Components/Process/SEOProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const SeoPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Seo"
                content="Indenio delivers powerful search engine optimization with higher rankings & traffic growth"
            ></BreadCumb>  
            <Seo></Seo> 
            <SeoProcess></SeoProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default SeoPage;