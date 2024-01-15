import React from 'react';
import { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useUsersState } from '../context/users.context';
import { useNavigate, useLocation } from 'react-router-dom';

const ChatInput = () => {
    const [message, setMessage] = useState('');
    const axiosPrivate = useAxiosPrivate();
    const { user } = useUsersState();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axiosPrivate.post('/sendMessage', {
                message,
                to: user?._id,
            });
        } catch (err) {
            navigate('/login', { state: { from: location }, replace: true })
        }
    };

    return (
        <div className='w-full px-2'>
            <form
                onSubmit={handleSubmit}
                className='flex items-center w-full space-x-2'
            >
                <input
                    type="text"
                    placeholder='Escribe un mensaje'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    autoComplete='off'
                    className='flex-1 ring-0 outline-none py-2 px-2 bg-white border border-gray-400 rounded-md'
                />
                <button
                    className='text-pink-700 disabled:text-gray-400'
                    disabled={!message}
                >
                    <IoMdSend className='h-6 w-6' />
                </button>
            </form>
        </div>
    )
};

export default ChatInput;