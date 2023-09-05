import React from 'react'
import { FadeIn } from 'react-slide-fade-in'
import industryPic from '../../assets/switchpic.png'

const ourServices2 = [
    {
        title: 'Business Phones Systems',
        text: "Mercury Communication Services of San Antonio stands as a trusted provider of NEC Business Phone systems, catering to businesses seeking efficient and reliable communication solutions. Leveraging NEC's cutting-edge technology, they deliver state-of-the-art business phone systems that facilitate seamless communication within organizations. These systems offer a range of features, including call routing, voicemail, conferencing, and unified communication platforms, enhancing collaboration and streamlining operations. Backed by Mercury Communication Services' expertise, businesses can optimize their communication infrastructure, improve customer interactions, and boost overall efficiency. With a commitment to excellence, their NEC Business Phone systems represent a pivotal choice for businesses aiming to elevate their communication capabilities in the competitive market landscape."
    },
    {
        title: 'Remote Worker Ready',
        text: 'Mercury Communication Services of San Antonio proudly offers tailored remote worker solutions designed to enhance productivity and connectivity. With the ever-evolving landscape of remote work, their expertise ensures seamless virtual collaborations. Leveraging advanced technologies, they optimize remote access to critical systems, ensuring secure data transmission through their comprehensive cybersecurity measures. By providing integrated VoIP communication and video conferencing solutions, Mercury Communication Services enables efficient communication among remote teams. With a commitment to reliability and innovation, they empower businesses to thrive in the modern era of remote work, making them the ideal partner for remote worker solutions in San Antonio.'
    },
    {
        title: 'Voice & Data Cabling',
        text: 'Mercury Communication Services of San Antonio is a distinguished provider of comprehensive Voice and Data cabling solutions, catering to businesses in need of robust communication infrastructure. With meticulous attention to detail, they design and implement cabling systems that seamlessly integrate voice and data transmissions. Their expertise ensures high-quality connections, minimizing signal loss and disruptions. By utilizing advanced cabling technologies, Mercury Communication Services guarantees optimized voice clarity and data transfer speeds, enabling businesses to operate efficiently and communicate effectively. With a focus on reliability and performance, their Voice and Data cabling services stand as an essential resource for businesses seeking dependable connectivity solutions in San Antonio.'
    },
    {
        title: 'Tech Support',
        text: 'Mercury Communication Services of San Antonio is your trusted partner for exceptional tech support and smart hands assistance, ensuring uninterrupted business operations. With their skilled team of professionals, they offer prompt troubleshooting and issue resolution, remotely or on-site as needed. From diagnosing technical glitches to conducting system updates, Mercury Communication Services ensures that your systems run smoothly. Their smart hands assistance facilitates hardware installations, maintenance, and configurations, providing a reliable extension of your technical team. With a commitment to swift and effective solutions, Mercury Communication Services stands ready to deliver unparalleled support, making them an invaluable asset for businesses in San Antonio seeking to maintain peak operational efficiency.'
    },
    {
        title: 'Network Solutions',
        text: 'Mercury Communication Services of San Antonio is a premier provider of comprehensive network solutions, offering businesses a robust foundation for seamless connectivity. Their expert team designs, implements, and maintains networks tailored to individual business needs, ensuring optimal performance and reliability. From wired to wireless solutions, Mercury Communication Services covers all aspects of network architecture, including routing, switching, and security protocols. With a strong focus on cybersecurity, they safeguard data and systems from potential threats. Whether for small businesses or large enterprises, their network solutions empower efficient data transmission, smooth collaboration, and enhanced productivity. With a commitment to innovation and excellence, Mercury Communication Services is the go-to partner for businesses in San Antonio seeking to build and maintain resilient, high-performance networks.'
    },
    {
        title: 'Support Consulting',
        text: 'Mercury Communication Services of San Antonio offers exceptional support consulting, serving as a trusted advisor for businesses seeking to optimize their technological infrastructure. With their vast expertise, they provide tailored guidance on IT strategies, system architecture, and technology investments. From evaluating current setups to recommending scalable solutions, Mercury Communication Services ensures that businesses make informed decisions aligned with their goals. Their consulting services extend to cybersecurity, compliance, and emerging technologies, fostering a secure and future-ready environment. With a commitment to empowering businesses, Mercury Communication Services stands as a reliable partner, guiding organizations in San Antonio towards innovation, efficiency, and sustained success.'
    },
]

const Services2 = () => {
    return (
        <section>
            <FadeIn
                from='left'
                positionOffset={0}
                triggerOffset={0}
                delayInMilliseconds={0}
                durationInMilliseconds={500}
                >
                <div id='service2' className=' text-white'>
                    <img src={industryPic} alt='river walk view with decorations' className='hero-image' />
                    <div className=' services-header'>
                        <div className=' p-2 text-white row  d-flex justify-content-end'>
                            <h3 className='title-underline'>Our Services</h3>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn
                from='right'
                positionOffset={200}
                triggerOffset={1}
                delayInMilliseconds={0}
                durationInMilliseconds={1000}
                >
                <div className='industry-container card-spacing'>
                    {ourServices2.map((service) => (
                        <div key={service.title} className=''>
                            <div key={service.title} className='industry-card'>
                                <h3 key={service.title} className='industry-title'>{service.title}</h3>
                                <p key={service.text} className='industry-text'>{service.text}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </FadeIn>
        </section>
    )
}

export default Services2;