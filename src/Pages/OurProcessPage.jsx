import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import WhatWeDo from '../Components/OurProcess/WeDo';
import WhatWeWork from '../Components/OurProcess/WeWork';
import OurValue from '../Components/OurProcess/OurValues';
import Brand4 from '../Components/Brand/Brand4';

const OurProcess = () => {
    return (
        <div>
            <BreadCumb
                Title="Our Process"
                content="Indenio drives growth through smart technology & modern digital solutions"
            ></BreadCumb>
            <WhatWeDo></WhatWeDo>
            <WhatWeWork></WhatWeWork>
            <OurValue></OurValue>
            <Brand4></Brand4>
        </div>
    );
};

export default OurProcess;