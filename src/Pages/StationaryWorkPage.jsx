import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Stationary from '../Components/ServiceDetails/StationaryWork';
import StationaryProcess from '../Components/Process/StationaryProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const StationaryPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Stationary Work"
                content="Indenio delivers creative stationery designs with branding impact & business identity"
            ></BreadCumb>  
            <Stationary></Stationary> 
            <StationaryProcess></StationaryProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default StationaryPage;