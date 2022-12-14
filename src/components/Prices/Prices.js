import React from 'react';
import PriceBOX from './PriceBox';

const Prices = () => {
    return (
        <div className='Prices pTB-3'>
            <h2 className='MainTitles'>قیمت ها</h2>
            <div className='container'>
                <div className='row'>
                    <PriceBOX/>
                </div>
            </div>
        </div>
    );
};

export default Prices;