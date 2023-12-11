import React from 'react'
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const Chat = () => {
    return (
        <div className='flex-1'>
            <div className='h-[10vh] bg-pink-700 flex flex-col justify-center px-3'>
                <p className='text-white font-light text-base'>
                    Kendra Contreras
                </p>
                <span className='block text-gray-300 text-xs'>
                    06-12-23
                </span>
            </div>
            <div className='h-[70vh] bg-gray-50 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-400'>
                <ChatMessages />
            </div>
            <div className='h-[10vh] bg-gray-200 flex items-center border-t-2 border-gray-300'>
                <ChatInput />
            </div>
        </div>
    )
};

export default Chat;