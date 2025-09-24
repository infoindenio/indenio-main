import React from 'react';
import Slider from 'react-slick';

const Testimonial4 = () => {

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
          subtitle: 'CEO & Founder',
          title: 'Mr. Daniel Harris',
          content: 'Indenio helped us elevate our digital strategy! Their creative agency solutions went beyond expectations, delivering a sleek, modern, and user-friendly platform. The team showed great attention to detail and true dedication to success!'
        },
        {
          subtitle: 'Founder, Indenio Client',
          title: 'Ms. Sophia Reed',
          content: 'Working with Indenio was a game-changer! Their innovative design and development skills completely boosted our brand identity. The website is visually stunning, functional, and reflects our vision perfectly. Highly recommended team!'
        },
      ]; 

    return (
            <section className="agenko-testimonial-sec pt-120 pb-120 gray-dark">
                <div className="container">
                    
                    <div className="testimonial-slider-three pf_fadeup">
                        
                    <Slider {...settings}>
                    {testimonialContent.map((item, i) => (
                        <div key={i} className="agenko-testimonial-item style-three text-center">
                            <div className="testimonial-content">
                                <ul className="ratings">
                                <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <p>{item.content}</p>
                                <div className="author-card">
                                    <div className="author-info">
                                        <h5>{item.title}</h5>
                                        <span className="position">{item.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        </Slider>                        
                        
  

                    </div>
                </div>
            </section>
    );
};

export default Testimonial4;
