import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import TermsAndConditions from '../Components/Terms Condition/TermsCondition';

const TermsAndConditionsPage = () => {
    return (
        <div>
            <BreadCumb
                Title="Term & Conditions"
                content="Indenio drives growth with modern digital solutions & smart business strategies"
            ></BreadCumb>  
            <TermsAndConditions></TermsAndConditions>           
        </div>
    );
};

export default TermsAndConditionsPage;