import React from 'react';
import DesBox from './DecriptionBox';

const Description = () => {
    return (
        <section className='description pTB-3'>
            <h3 className="MainTitles">تیتر انتخابی برای این قسمت</h3>
            <div className='wrapper container pt-2'>
                <DesBox ICON="fas fa-cogs"/>
                <DesBox ICON="fas fa-magic"/>
                <DesBox ICON="fas fa-mobile-alt"/>
            </div>
        </section>
    );
};

export default Description;