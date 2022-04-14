import React from 'react';
import { Band, LargeBand } from '../constants/icons';

const DoubleBand = () => {
    return (
        <div className='bands flex col'>
            <Band />
            <LargeBand />
        </div >
    );
};

export default DoubleBand;