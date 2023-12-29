import React from 'react'
import { firstLetter } from '../utils/first.letter';

const Avatar = ({ name }) => {
    return (
        <div className='relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-300 rounded-full'>
            <span className='font-medium'>
                {firstLetter(name)}
            </span>
        </div>
    )
};

export default Avatar;