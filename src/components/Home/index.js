import React from 'react';
import { FadeIn } from 'react-slide-fade-in'
import Hero from '../../assets/mercuryhero.jpeg';
import Services from '../Services';
import Contact from '../Contact';
import Reviews from '../Reviews'

const Home =() => {
    return (
        <section>
            <FadeIn
                from='left'
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={0}
                durationInMilliseconds={2000}>

                <div id='home' className='bg-dark text-white'>
                    <img src={Hero} alt='San Antonio Skyline with data connections going from building to building' className=' hero-image bg-dark' />
                    
                    <div className='container'>
                        <div className=' card-overlay-size card-img-overlay p-2 text-white row'>
                            <div className='col-12 col-sm-12 col-md-9 col-lg-9 col-xl-8 col-xxl-8 bg-dark bg-opacity-75'>
                                <h3 className='card-title hero-title hero-underline'>
                                    Complete Business I.T. and Telecommunications Solutions
                                </h3>
                                <p className='card-text hero-text'>
                                    Mercury Communication Services of San Antonio is a leading Information 
                                    Technology and Telecommunication solutions provider in the greater San 
                                    Antonio, Texas area. Its owners have over 30 years of experience and 
                                    while many changes have occurred in the I.T. and Telecommunications 
                                    industry during that time, one thing has remained the same: the need for 
                                    the best customized communication system, network systems, and Mercury's 
                                    high level of commitment. Our advanced products and highly trained staff 
                                    assure that you always receive the highest levels of reliability and 
                                    technology. Make Mercury Communications of San Antonio your business's 
                                    "One Stop Shop" for I.T. and Telecommunications services.  Should a problem 
                                    ever arise or have questions, our technicians are available 24 hours, 7 days a week.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div> 

            </FadeIn>
            <br/>
            <br/>
            <br/>
            <br/>
            <section id='services'>
                <Services id='services'></Services>

            </section>
            <FadeIn
                from='left'
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={700}
                durationInMilliseconds={2000}>
                <Reviews></Reviews>
            </FadeIn>
            <FadeIn
                from='right'
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={800}
                durationInMilliseconds={2000}>
                <Contact id='contact'></Contact>
            </FadeIn>
            

        </section>
    );
}

export default Home;