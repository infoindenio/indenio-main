import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Graphics from '../Components/ServiceDetails/Graphics';
import GraphicsProcess from '../Components/Process/GraphicsProcess';
// import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const GraphicPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Graphic"
                content="Indenio delivers creative graphic services with branding design & stationery solutions"
            ></BreadCumb>  
            <Graphics></Graphics> 
            <GraphicsProcess></GraphicsProcess> 
            {/* <Pricing1></Pricing1> */}
              <Brand4></Brand4>     
        </div>
    );
};

export default GraphicPage;