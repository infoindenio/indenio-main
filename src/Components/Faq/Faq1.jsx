import React, { useEffect, useRef, useState } from 'react';

const Faq1 = () => {

    const faqContent = [
        {title:'What services does Indenio provide?', content:'Indenio offers web development, mobile apps, e-commerce, and branding solutions designed to help businesses grow and build a strong digital presence.'},
        {title:'Can I manage and update my project content myself?', content:'Yes, Indenio delivers CMS-based solutions like WordPress, Shopify, or custom panels, so you can easily edit content, add pages, and manage updates without technical skills.'},
        {title:'How does Indenio’s project process work?', content:'Our team follows a streamlined process that includes planning, design, development, and testing, ensuring a smooth experience and high-quality results.'},
        {title:'How long will it take to finish my project?', content:'Project timelines depend on complexity, but Indenio ensures efficient delivery by setting clear milestones and keeping communication transparent at every stage.'},
        {title:'Does Indenio provide support after project delivery?', content:'Yes, Indenio offers ongoing maintenance, technical support, and performance monitoring to keep your digital products secure and up to date.'},
        {title:'Can Indenio redesign or upgrade my existing website?', content:'Absolutely, Indenio specializes in revamping old websites with modern designs, enhanced functionality, and improved user experiences to match today’s needs.'},
      ]; 

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);

    return (
<section className="agk-faq pt-130 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    
                                    <div className="section-title mb-50 pf_fadeup">
                                        <span className="sub-title">FAQ</span>
                                        <h2>Got Questions? We’ve Got Answers</h2>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                   
                                    {/* <div className="faq-big-text">Faq’s</div> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    
                                    <div className="agk-image-box mb-50 pf_fadeup">
                                        <div className="agk-image">
                                            <img src="/assets/images/digital-agency/faq/faq1.webp" alt="faq image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="agk-content-box mb-30">
                                       
                                        <div className="agk-accordion" id="accordionOne">
                                        {faqContent.map((item, index) => (
                                            <div key={index} className={`agenko-accordion-item mb-20 pf_fadeup ${index === openItemIndex ? "active" : "" }`} >
                                                <div onClick={() => handleItemClick(index)} className="accordion-header">
                                                    <h6  className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true">
                                                    {item.title}
                                                    </h6>
                                                </div>
                                                <div ref={accordionContentRef}  id="collapse1" className="accordion-collapse accordion-content" data-bs-parent="#accordionOne">
                                                    <div className="accordion-content">
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    );
};

export default Faq1;
