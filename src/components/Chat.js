import React from 'react'
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const Chat = () => {
    return (
        <div>
            <div className='h-[10vh] bg-pink-700'>
                Header
            </div>
            <div className='h-[70vh] bg-gray-50'>
                <ChatMessages />
            </div>
            <div className='h-[10vh] bg-gray-200 flex items-center border-t-2 border-gray-300'>
                <ChatInput />
            </div>
        </div>
    )
};

export default Chat;