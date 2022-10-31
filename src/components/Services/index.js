import React from 'react';
import { FadeIn } from 'react-slide-fade-in';

const ourServices = [
    {
        title: 'Business Phone Systems',
        text: 'If you are in search for a phone system in the San Antonio area you will find Mercury Communications, a local Texas company that install, service and repair business phone systems.',
        link: ''
    },
    {
        title: 'Remote Worker Ready',
        text: 'In the past 2 years we have all seen the need to have a plan in place for the possibility of staff to work remotely. Mercury communications can help you plan and implement solutions that allow workers to remain working at home while maintaining connections to both business phone and computer systems.',
        link: ''
    },
    {
        title: 'Voice & Data Cabling',
        text: 'A structured cabling system is a complete system of cabling and associatd hardware, which provides a comprehensive telecommunications infrastructure. This infrastructure serves a wide range of uses, such as to provide telephone service or transmit data through a computer network. Mercury is certified to handle all of your voice and data cabling requirements.',
        link: ''
    },
    {
        title: 'Tech Support',
        text: 'Sometimes, problems happen with technology. On those occasions when your staff needs help, Mercury Communicaions provides direct assistance to your team.',
        link: ''
    },
    {
        title: 'Network Solutions',
        text: 'We understand that your business network is a vital elemeent of your business. In this technology-oriented age, your enterprise is only as strong as the computer infrastructure that upholds it.',
        link: ''
    },
    {
        title: 'Support Consulting',
        text: 'We work with many types of IT customers with unique needs and different budget levels. We craft an IT plan and budget for each customer to help them strategically select the services and products that will provide the best value.',
        link: ''
    },
]

function Services() {
    return (
        <section id='services' className='section-spacing'>
            <FadeIn
                from='bottom'
                positionOffset={500}
                triggerOffset={200}
                delayInMilliseconds={500}
                durationInMilliseconds={1000}
                >
                <h3>Our Services</h3>
                <div className='d-flex flex-row flex-wrap service-container'>
                    {ourServices.map((service) => (
                        <div className='service-cards card col-8 col-sm-5 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
                            <div className='card-body'>
                                <h2 key={service.title} className='card-title service-title'>{service.title}</h2>
                                <p key={service.text} className='card-text service-text'>{service.text}</p>
                            </div>
                        </div>            
                    ))}
                </div>
            </FadeIn>
        </section>
    )
}

export default Services;