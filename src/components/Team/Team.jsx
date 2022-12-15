import React from 'react';
import Teambox from './TeamBox';

const Team = () => {
    return (
        <div className='team pTB-3'>
            <h2 className='MainTitles'>تیم ما</h2>
            <div className="container pt-2">
                <div className="row">
                <Teambox/>
                <Teambox/>
                <Teambox/>
                </div>
            </div>
        </div>
    );
};

export default Team;