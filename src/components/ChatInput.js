import React from 'react';
import { IoMdSend } from "react-icons/io";

const ChatInput = () => {
    return (
        <div className='w-full px-2'>
            <form className='flex items-center w-full space-x-2'>
                <input
                    type="text"
                    placeholder='Escribe un mensaje'
                    className='flex-1 ring-0 outline-none py-2 px-2 bg-white border border-gray-400 rounded-md'
                // bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
                />
                <button>
                    <IoMdSend className='h-6 w-6 text-gray-800' />
                </button>
            </form>
        </div>
    )
};

export default ChatInput;