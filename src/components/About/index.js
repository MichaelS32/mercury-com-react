import React from 'react';
import { FadeIn } from 'react-slide-fade-in';
import aboutPic from '../../assets/network-switch.jpg';

function About() {
    return (
        <section>
            <FadeIn
                from='left'
                positionOffset={500}
                triggerOffset={200}
                delayInMilliseconds={0}
                durationInMilliseconds={1000}
                >
            
                <div>
                    <div id='about' className='card text-white'>
                        <img src={aboutPic} alt='river walk view with decorations' className='card-img hero-image bg-dark' />
                        <div className='container industry-title-container'>
                            <div className='about-overlay-size card-img-overlay p-2 text-white row bg-title d-flex justify-content-end'>
                                <h3 className='card-title hero-title title-underline'>Why Choose Mercury?</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn
            from='right'
            positionOffset={800}
            triggerOffset={200}
            delayInMilliseconds={0}
            durationInMilliseconds={1000}
            >    
                <p className='about-text'>
                    Mercury Communication Services of San Antonio's mission is to provide 
                    customers with a world-class, tailored solution for every aspect of 
                    their communications network: staging, configuring, deploying, maintaining, 
                    and upgrading. We follow this up with support from our professionals with 
                    leading technical expertise and state-of-the-art resources and the result 
                    is a focused effort to provide our customers with the best telecommunications 
                    solutions in the industry. Regardless of your business size and complexity, 
                    Mercury is ready to enable you with state-of-the-art equipment and functionality.
                </p>
            </FadeIn>
            
            
        </section>
    );
}

export default About;