import React from 'react';
import { ReasonImage } from './ReasonImgBox';
import ReasonContent from './ReasonContent';

const Reason = () => {
    return (
        <section className='reason pTB-3'>
            <div className='container'>
                <div className='row'>
                    <div className='column'>
                        <ReasonContent/>
                    </div>
                    <div className='column'>
                        <ReasonImage/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reason;