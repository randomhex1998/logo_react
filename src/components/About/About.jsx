import React from 'react';
import AboutBOX from './AboutBox';

const About = () => {
    return (
        <div className='about pTB-3'>
            <h3 className="MainTitles">آنچه ما انجام میدهیم</h3>
            <div className="container pt-2">
                <div className="row">
                    <AboutBOX AboutIco="fab fa-app-store-ios" AboutTitle="توسعه اپلیکیشن"/>
                    <AboutBOX AboutIco="fas fa-drafting-compass" AboutTitle="طراحی گرافیک"/>
                    <AboutBOX AboutIco="fas fa-lightbulb" AboutTitle="ایده خلاقانه"/>
                </div>
                <div className="row pt-2">
                    <AboutBOX AboutIco="fas fa-ad" AboutTitle="مارکتینگ"/>
                    <AboutBOX AboutIco="fas fa-headset" AboutTitle="پشتیبانی"/>
                    <AboutBOX AboutIco="fas fa-copyright" AboutTitle="طراحی برند"/>
                </div>
            </div>
        </div>
    );
};

export default About;