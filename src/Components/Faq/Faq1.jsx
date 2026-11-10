import React, { useEffect, useRef, useState } from 'react';

const Faq1 = () => {

    const faqContent = [
        {title:'What services does Indenio provide?', content:'We build custom WordPress websites and WooCommerce stores, handle SEO (technical, on-page, local and content) and run social media and paid ads on Meta and Google. You can hire us for one service or the complete package.'},
        {title:'How long does a new website take?', content:'Most business websites take 2 to 4 weeks from design approval. Larger online stores or custom features can take longer, and we agree a clear timeline with you before we start.'},
        {title:'Will my website rank on Google?', content:'Every site we build is fast, mobile-friendly and SEO-ready from day one. For competitive keywords we offer monthly SEO packages covering technical fixes, content and local SEO.'},
        {title:'Can I update the website myself?', content:'Yes. We build on WordPress so you can edit text, images, products and blog posts yourself, and we show you how. We can also handle updates for you on a monthly plan.'},
        {title:'Do you work with clients outside Pakistan?', content:'Yes. We work with businesses in the UK, USA, Norway and Australia as well as Pakistan, communicating on WhatsApp, email and video calls in your time zone.'},
        {title:'Do you provide support after launch?', content:'Yes. We offer ongoing maintenance, security monitoring, malware cleanup, backups and growth work such as SEO and ads, as one-off jobs or monthly retainers.'}
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
                                            <img src="/assets/svg/faq.svg" alt="faq image" />
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
