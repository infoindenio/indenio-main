import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import UIUX from '../Components/ServiceDetails/UIUX';
import UiUxProcess from '../Components/Process/UIUXProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const UIUXPage = () => {
    return (
        <div>
             <BreadCumb
                Title="UI/UX design"
                content="Indenio delivers modern UI/UX design with user-focused layouts & seamless experiences"
            ></BreadCumb>  
            <UIUX></UIUX> 
            <UiUxProcess></UiUxProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default UIUXPage;