import React from 'react';
import DesBox from './DecriptionBox';

const Description = () => {
    return (
        <section className='description pTB-3'>
            <div className='wrapper container'>
                <DesBox ICON="fas fa-cogs"/>
                <DesBox ICON="fas fa-magic"/>
                <DesBox ICON="fas fa-mobile-alt"/>
            </div>
        </section>
    );
};

export default Description;