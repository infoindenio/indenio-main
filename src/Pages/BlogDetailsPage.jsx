import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import BlogDetails from '../Components/BlogDetails/BlogDetails';

// import WebsiteBlogDetails from '../Components/BlogDetails/WebsiteDetails';
// import MobileBlogDetails from '../Components/BlogDetails/MobileAppDetails';
// import ChooseBlogDetails from '../Components/BlogDetails/ChooseDetails';

const BlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Blog Details"
                content="Indenio empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <BlogDetails></BlogDetails>            
        </div>
    );
};

export default BlogDetailsPage;