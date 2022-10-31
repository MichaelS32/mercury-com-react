import React from 'react'
import { FadeIn } from 'react-slide-fade-in'
import industryPic from '../../assets/industries-background.png'

const ourIndustries = [
    {
        title: 'Hospitality',
        text: "Mercury can help your hospitality center rise above the competition and offer your guests greater value, resulting in improved guest services and repeat sales. Mercury has been supplying both Data and Telecommunications equipment and customer service to many of San Antonio's largest and well known Hotels and Restaurants, making managing customer needs and request more efficiently."
    },
    {
        title: 'Healthcare',
        text: "To meet the needs of our healthcare clients, we improve team communications, enable staff mobility, allow for organized facility operators, and enhance communications across the entire healthcare facility."
    },
    {
        title: 'Education',
        text: "Educational facilities can include a multitude of sizes and complexities, from small training stations to large universities. Mercury can help your facility converge its data and telecommunication needs."
    },
    {
        title: 'Small Business',
        text: "The needs of businesses vary and that is why flexibility in a telephone system is so important. A business should never have to operate because of the way their telephone system operates. Matching the telephone system to unique business applications is the key to success."
    },
]

const Industries = () => {
    return (
        <section>
            <FadeIn
                from='left'
                positionOffset={500}
                triggerOffset={200}
                delayInMilliseconds={0}
                durationInMilliseconds={1000}
                >
                <div id='industries' className='card text-white'>
                    <img src={industryPic} alt='river walk view with decorations' className='card-img hero-image bg-dark' />
                    <div className='container industry-title-container'>
                        <div className='overlay-size card-img-overlay p-2 text-white row bg-title d-flex justify-content-end'>
                            <h3 className='card-title hero-title title-underline'>I.T. Solutions for your Industry</h3>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn
                from='right'
                positionOffset={500}
                triggerOffset={200}
                delayInMilliseconds={0}
                durationInMilliseconds={1000}
                >
                <div className='industry-container card-spacing'>
                    {ourIndustries.map((industry) => (
                        <div className=''>
                            <div className='industry-card'>
                                <h3 key={industry.title} className='industry-title'>{industry.title}</h3>
                                <p key={industry.text} className='industry-text'>{industry.text}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </FadeIn>
        </section>
    )
}

export default Industries;