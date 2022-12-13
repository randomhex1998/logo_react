import React from 'react';
import AboutBOX from './AboutBox';

const About = () => {
    return (
        <div className='about pTB-3'>
            <h3 className="MainTitles">آنچه ما انجام میدهیم</h3>
            <div className="container">
                <div className="row">
                    <AboutBOX AboutIco="fab fa-app-store-ios" AboutTitle="Without Title"/>
                    <AboutBOX AboutIco="fas fa-drafting-compass" AboutTitle="Without Title"/>
                    <AboutBOX AboutIco="fas fa-lightbulb" AboutTitle="Without Title"/>
                </div>
                <div className="row pt-2">
                    <AboutBOX AboutIco="fas fa-ad" AboutTitle="Without Title"/>
                    <AboutBOX AboutIco="fas fa-headset" AboutTitle="Without Title"/>
                    <AboutBOX AboutIco="fas fa-copyright" AboutTitle="Without Title"/>
                </div>
            </div>
        </div>
    );
};

export default About;