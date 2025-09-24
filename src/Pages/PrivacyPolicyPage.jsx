import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';

const PrivacyPolicyPage = () => {
    return (
        <div>
            <BreadCumb
                Title="Privacy Policy"
                content="Indenio drives growth with modern digital solutions & smart business strategies"
            ></BreadCumb>  
            <PrivacyPolicy></PrivacyPolicy>           
        </div>
    );
};

export default PrivacyPolicyPage;