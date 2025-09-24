import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Portfolio from '../Components/Portfolio/Portfolio';
import portfolioData from "../Pages/PortfolioPage";

const ProjectPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Project"
                content="Indenio empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <Portfolio portfolioData={portfolioData} />
        </div>
    );
};

export default ProjectPage;