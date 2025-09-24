import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import MobileBlogDetails from '../Components/BlogDetails/MobileAppDetails';

const MobileBlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Why a Mobile App?"
                content="A mobile app helps businesses boost engagement, build loyalty & offer personalized experiences to customers."
            ></BreadCumb> 
            <MobileBlogDetails></MobileBlogDetails>            
        </div>
    );
};

export default MobileBlogDetailsPage;
