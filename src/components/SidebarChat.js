import React from 'react';
import Avatar from './Avatar';

const SidebarChat = () => {
    return (
        <div className='flex justify-center space-x-2 px-3 py-2 border-b-2 border-gray-300 cursor-pointer hover:bg-gray-200'>
            <Avatar />
            <div className='hidden md:flex flex-1 flex-col'>
                <div className='flex justify-between items-center space-x-2'>
                    <p className='text-base font-normal max-w-[17ch] truncate'>
                        Kendra Contreras lorem12
                    </p>
                    <span className='text-xs font-medium text-gray-500'>
                        02-12-23
                    </span>
                </div>
                <p className='text-sm text-gray-900 max-w-[30ch] truncate'>
                    lorem40
                </p>
            </div>
        </div>
    )
};

export default SidebarChat;