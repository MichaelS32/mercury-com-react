import React from "react";
import Slider from "react-slick";

export default function Reviews() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className='reviews-bg'>
        <h2 className='reviews-title'>Reviews</h2>
        <Slider {...settings}>
        <div className='review-container'>
            <h3>John H. <br /> Regional Service Manager</h3>
        
            <p>
                Not having a dedicated I.T. staff put a huge drain on our business and employees. 
                By hiring Mercury and their team we were able to shed that burden to our business.
            </p>
        </div>
        <div className='review-container'>
            <h3>Chrystal V. <br /> BSK Law Office</h3>
            
            <p>
                Mercury Communications were able to work with our Internet Provider, upgrade our 
                network equipment and wireless to bring us up to date and speed!! Best decision we 
                could have made!
            </p>
        </div>
        <div className='review-container'>
            <h3>Susan G. <br /> Owner, Glenny Law Firm</h3>
            
            <p>
                We needed a phone system that always stayed up and worked in a way that 
                fit our particular need. Mercury did that for us.
            </p>
        </div>
        
        </Slider>
    </section>
    
  );
}
