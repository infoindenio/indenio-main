import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Faq2 from '../Components/Faq/Faq2';

const FaqPage = () => {
    return (
        <div>
            <BreadCumb
                Title="FAQ"
                content="Indenio drives growth with modern digital solutions & smart business strategies"
            ></BreadCumb>  
            <Faq2></Faq2>           
        </div>
    );
};

export default FaqPage;