import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import WebsiteBlogDetails from '../Components/BlogDetails/WebsiteDetails';

const WebsiteBlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Why a Website?"
                content="A website gives startups and small businesses an affordable way to build trust, reach new customers & grow online."
            ></BreadCumb> 
            <WebsiteBlogDetails></WebsiteBlogDetails>            
        </div>
    );
};

export default WebsiteBlogDetailsPage;
