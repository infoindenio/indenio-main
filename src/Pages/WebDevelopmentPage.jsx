import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Web from '../Components/ServiceDetails/WebDevelopment';
import WebProcess from '../Components/Process/WebDevelopmentprocess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const WebPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Web Developmet"
                content="Indenio creates dynamic websites with modern design & scalable digital solutions"
            ></BreadCumb>  
            <Web></Web> 
            <WebProcess></WebProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default WebPage;