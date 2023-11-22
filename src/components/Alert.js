import React from 'react';

const Alert = ({ message, type }) => {
    return (
        <div className={`p-4 text-sm text-center rounded-lg ${type}`}>
            <p className='font-medium'>
                {message}
            </p>
        </div>
    )
};

export default Alert;