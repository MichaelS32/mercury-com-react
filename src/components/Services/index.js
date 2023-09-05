import React from 'react';
import { FadeIn } from 'react-slide-fade-in';
import { HashLink } from 'react-router-hash-link';

const ourServices = [
    {
        id: 'bpshandleShow',
        title: 'Business Phone Systems',
        text: 'If you are in search for a phone system in the San Antonio area you will find Mercury Communications, a local Texas company that install, service and repair business phone systems.',
        mtext: "Mercury Communication Services of San Antonio stands as a trusted provider of NEC Business Phone systems, catering to businesses seeking efficient and reliable communication solutions. Leveraging NEC's cutting-edge technology, they deliver state-of-the-art business phone systems that facilitate seamless communication within organizations. These systems offer a range of features, including call routing, voicemail, conferencing, and unified communication platforms, enhancing collaboration and streamlining operations. Backed by Mercury Communication Services' expertise, businesses can optimize their communication infrastructure, improve customer interactions, and boost overall efficiency. With a commitment to excellence, their NEC Business Phone systems represent a pivotal choice for businesses aiming to elevate their communication capabilities in the competitive market landscape."
    },
    {
        id: 'rwrhandleShow',
        title: 'Remote Worker Ready',
        text: 'In the past 2 years we have all seen the need to have a plan in place for the possibility of staff to work remotely. Mercury communications can help you plan and implement solutions that allow workers to remain working at home while maintaining connections to both business phone and computer systems.',
        mtext: 'Mercury Communication Services of San Antonio proudly offers tailored remote worker solutions designed to enhance productivity and connectivity. With the ever-evolving landscape of remote work, their expertise ensures seamless virtual collaborations. Leveraging advanced technologies, they optimize remote access to critical systems, ensuring secure data transmission through their comprehensive cybersecurity measures. By providing integrated VoIP communication and video conferencing solutions, Mercury Communication Services enables efficient communication among remote teams. With a commitment to reliability and innovation, they empower businesses to thrive in the modern era of remote work, making them the ideal partner for remote worker solutions in San Antonio.'
    },
    {
        id: 'vdchandleShow',
        title: 'Voice & Data Cabling',
        text: 'A structured cabling system is a complete system of cabling and associatd hardware, which provides a comprehensive telecommunications infrastructure. This infrastructure serves a wide range of uses, such as to provide telephone service or transmit data through a computer network. Mercury is certified to handle all of your voice and data cabling requirements.',
        mtext: 'Mercury Communication Services of San Antonio is a distinguished provider of comprehensive Voice and Data cabling solutions, catering to businesses in need of robust communication infrastructure. With meticulous attention to detail, they design and implement cabling systems that seamlessly integrate voice and data transmissions. Their expertise ensures high-quality connections, minimizing signal loss and disruptions. By utilizing advanced cabling technologies, Mercury Communication Services guarantees optimized voice clarity and data transfer speeds, enabling businesses to operate efficiently and communicate effectively. With a focus on reliability and performance, their Voice and Data cabling services stand as an essential resource for businesses seeking dependable connectivity solutions in San Antonio.'
    },
    {
        id: 'tshandleShow',
        title: 'Tech Support',
        text: 'Sometimes, problems happen with technology. On those occasions when your staff needs help, Mercury Communicaions provides direct assistance to your team.',
        mtext: 'Mercury Communication Services of San Antonio is your trusted partner for exceptional tech support and smart hands assistance, ensuring uninterrupted business operations. With their skilled team of professionals, they offer prompt troubleshooting and issue resolution, remotely or on-site as needed. From diagnosing technical glitches to conducting system updates, Mercury Communication Services ensures that your systems run smoothly. Their smart hands assistance facilitates hardware installations, maintenance, and configurations, providing a reliable extension of your technical team. With a commitment to swift and effective solutions, Mercury Communication Services stands ready to deliver unparalleled support, making them an invaluable asset for businesses in San Antonio seeking to maintain peak operational efficiency.'
    },
    {
        id: 'nshandleShow',
        title: 'Network Solutions',
        text: 'We understand that your business network is a vital elemeent of your business. In this technology-oriented age, your enterprise is only as strong as the computer infrastructure that upholds it.',
        mtext: 'Mercury Communication Services of San Antonio is a premier provider of comprehensive network solutions, offering businesses a robust foundation for seamless connectivity. Their expert team designs, implements, and maintains networks tailored to individual business needs, ensuring optimal performance and reliability. From wired to wireless solutions, Mercury Communication Services covers all aspects of network architecture, including routing, switching, and security protocols. With a strong focus on cybersecurity, they safeguard data and systems from potential threats. Whether for small businesses or large enterprises, their network solutions empower efficient data transmission, smooth collaboration, and enhanced productivity. With a commitment to innovation and excellence, Mercury Communication Services is the go-to partner for businesses in San Antonio seeking to build and maintain resilient, high-performance networks.'
    },
    {
        id: 'schandleShow',
        title: 'Support Consulting',
        text: 'We work with many types of IT customers with unique needs and different budget levels. We craft an IT plan and budget for each customer to help them strategically select the services and products that will provide the best value.',
        mtext: 'Mercury Communication Services of San Antonio offers exceptional support consulting, serving as a trusted advisor for businesses seeking to optimize their technological infrastructure. With their vast expertise, they provide tailored guidance on IT strategies, system architecture, and technology investments. From evaluating current setups to recommending scalable solutions, Mercury Communication Services ensures that businesses make informed decisions aligned with their goals. Their consulting services extend to cybersecurity, compliance, and emerging technologies, fostering a secure and future-ready environment. With a commitment to empowering businesses, Mercury Communication Services stands as a reliable partner, guiding organizations in San Antonio towards innovation, efficiency, and sustained success.'
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
                    {ourServices.filter(service => service.id).map((service) => (
                        <div key={service.id} className='service-cards card col-8 col-sm-5 col-md-3 col-lg-3 col-xl-3 col-xxl-3 '>
                            {/* <div className='card-body'> */}
                                <h2 key={service.title} className='card-title service-title'>{service.title}</h2>
                                <p key={service.text} className='card-text service-text'>{service.text}</p>
                                
                                    
                                <HashLink smooth exact='true' to='/services2/#service2' key={service.id} className='button'>
                                    <p className='button-text'>Learn More</p>
                                </HashLink> 
                            {/* </div> */}
                        </div>            
                    ))}
                </div>
            </FadeIn>
            
        </section>
    )
}

export default Services;