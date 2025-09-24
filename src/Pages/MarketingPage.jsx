import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Marketing from '../Components/ServiceDetails/Marketing';
import MarketingProcess from '../Components/Process/MarketingProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const MarketingPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Marketing"
                content="Indenio delivers result-driven marketing with social media growth & SEO strategies"
            ></BreadCumb>  
            <Marketing></Marketing> 
            <MarketingProcess></MarketingProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default MarketingPage;