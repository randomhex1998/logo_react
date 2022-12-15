import React from 'react';
import SocialFooter from './SocialFooter';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <h2 className=''>LOGO</h2>
                <SocialFooter/>
                <p>کلیه حقوق برای <span>رایان جابری</span> محفوظ است</p>
            </div>
        </footer>
    );
};

export default Footer;