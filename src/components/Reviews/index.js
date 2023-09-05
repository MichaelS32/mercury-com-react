import React from "react";
import Slider from "react-slick";

export default function Reviews() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    draggable: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

//   slickPlay();
  return (
    <section className='reviews-bg'>
        <h2 className='reviews-title'>Reviews</h2>
        <Slider {...settings}>
        <div className='review-container'>
            <h3>John H. <br /> Regional Service Manager</h3>
        
            <p className="review-text">
                "Not having a dedicated I.T. staff put a huge drain on our business and employees. 
                By hiring Mercury and their team we were able to shed that burden to our business."
            </p>
        </div>
        <div className='review-container'>
            <h3>Chrystal V. <br /> BSK Law Office</h3>
            
            <p className="review-text">
                "Mercury Communications were able to work with our Internet Provider, upgrade our 
                network equipment and wireless to bring us up to date and speed!! Best decision we 
                could have made!"
            </p>
        </div>
        <div className='review-container'>
            <h3>Susan G. <br /> Owner, Glenny Law Firm</h3>
            
            <p className="review-text">
                "We needed a phone system that always stayed up and worked in a way that 
                fit our particular need. Mercury did that for us."
            </p>
        </div>
        <div className='review-container'>
            <h3>Dan Prisacaru <br /> Seven Hills Women's Health</h3>
            
            <p className="review-text">
                "Mike, Duke, and their crew displayed utmost professionalism and took the time to address all of my queries. They installed the new phone systems at a fair cost and went above and beyond by offering a temporary fix for our old, malfunctioning system. The previous company I worked with was uninterested in assisting us due to our outdated setup.

I wholeheartedly endorse "Mercury Communication Services" based in San Antonio for their exceptional work and excellent customer service."
            </p>
        </div>
        
        </Slider>
    </section>
    
  );
}
