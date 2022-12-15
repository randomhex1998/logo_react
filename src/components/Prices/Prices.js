import React from 'react';
import PriceBOX from './PriceBox';

const Prices = () => {
    return (
        <div className='prices pTB-3'>
            <h2 className='MainTitles'>قیمت ها</h2>
            <div className='container pt-2'>
                <div className='row'>
                    <PriceBOX/>
                    <PriceBOX/>
                    <PriceBOX/>
                </div>
            </div>
        </div>
    );
};

export default Prices;