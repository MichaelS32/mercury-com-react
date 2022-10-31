import React from 'react';
import footerPic from '../../assets/mercury-sm-logo.png';

const Footer = () => {
    return (
        <section className=''>
            <img src={footerPic} alt='small-mercury-logo' className='footer-image' />
            <div className='footer'>
                <address>
                    Address: 2929 Mossrock, Ste. 116, San Antonio, Tx 78230 <br />
                    Tel: 210.349.1001 <br />
                    Email: customerservice@sa-mercurycom.com
                </address>
            </div>
            
        </section>
    )
}

export default Footer;