import React from 'react';
import Slider from 'react-slick';

const Testimonial2 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

    const testimonialContent = [
        {
          subtitle:'CEO & Founder',
          title:'Mr. Daniel Carter',
          content:'Indenio completely transformed our online presence! Their outstanding web solutions went beyond expectations, delivering a sleek, user-friendly and powerful website.'
        },
        {
          subtitle:'CEO & Founder',
          title:'Ms. Olivia Smith',
          content:'Indenio completely transformed our online presence! Their outstanding web solutions went beyond expectations, delivering a sleek, user-friendly and powerful website.'
        },
      ]; 

    return (
            <section className="agk-testimonial gray-dark pt-130 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center mb-50 pf_fadeup">
                                <span className="sub-title">Testimonials</span>
                                <h2>Trusted Client Experiences With Indenio</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            
                            <div className="agk-image-box mb-50 pf_fadeup">
                                <div className="agk-image">
                                    <img src="/assets/svg/faq.svg" className="animated-image" alt="testimonial image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testimonial-wrapper mb-50 pf_fadeup">
                                
                                <div className="testimonial-slider">
                                <Slider {...settings}>
                                {testimonialContent.map((item, i) => (                                    
                                    <div key={i} className="agenko-testimonial-item style-one">
                                        <div className="testimonial-content">
                                            <ul className="ratings">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <p>{item.content}</p>
                                            <div className="author-item-quote d-flex justify-content-between align-items-center">
                                                <div className="author-item">
                                                    <div className="author-info">
                                                        <h4>{item.title}</h4>
                                                        <h5>{item.subtitle}</h5>
                                                    </div>
                                                </div>
                                                <div className="quote">
                                                <i className="bi bi-chat-square-quote-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    </Slider>                                    


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Testimonial2;
