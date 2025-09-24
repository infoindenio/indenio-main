import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import ChooseBlogDetails from '../Components/BlogDetails/ChooseDetails';

const ChooseBlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Which One You Choose?"
                content="Websites suit startups, mobile apps fit customer-focused brands, while growing businesses benefit from both."
            ></BreadCumb> 
            <ChooseBlogDetails></ChooseBlogDetails>            
        </div>
    );
};

export default ChooseBlogDetailsPage;
