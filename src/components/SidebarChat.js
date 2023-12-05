import React from 'react';
import Avatar from './Avatar';

const SidebarChat = () => {
    return (
        <div className='flex space-x-2 px-3 py-2 border-b-2 border-gray-300n cursor-pointer hover:bg-gray-200'>
            <Avatar />
            <div className='flex-1 flex-col'>
                <div className='flex justify-between items-center'>
                    <p className='text-base font-normal'>
                        Kendra Contreras
                    </p>
                    <span className='text-xs font-medium text-gray-500'>
                        02-12-23
                    </span>
                </div>
                <p className='text-sm text-gray-900'>
                    this is a mensage dnsidnuisf odnsinfin
                </p>
            </div>
        </div>
    )
};

export default SidebarChat;