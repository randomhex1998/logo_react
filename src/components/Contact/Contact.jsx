import React from 'react';
import ContactInfo from './ContactInfos';

const Contact = () => {
    return (
        <div className='contact pTB-3'>
            <h2 className='MainTitles'>با ما در ارتباط باشید</h2>
            <div className="container">
                <div className="row">
                <ContactInfo InfoIco="fa fa-phone-alt" InfoTitle="تلفن" InfoText="09212163365" />
                <ContactInfo InfoIco="fas fa-envelope" InfoTitle="ایمیل" InfoText="rayan@gmail.com" />
                <ContactInfo InfoIco="fas fa-map-marked-alt" InfoTitle="آدرس" InfoText="کرج" />
                </div>
            </div>
        </div>
    );
};

export default Contact;