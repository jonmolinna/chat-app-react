import React, { useEffect, useState } from 'react';
import SidebarChat from './SidebarChat';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [chats, setChats] = useState(null);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;

        const getUsersChats = async () => {
            try {
                const response = await axiosPrivate.get('/users');

                isMounted && setChats(response.data.users);
            } catch (error) {
                console.log('ERROR', error);
                navigate('/login', { state: { from: location }, replace: true })
            }
        };

        getUsersChats();
        console.log('HOLA SIDEBAR')

        return () => {
            isMounted = false;
        }
    }, [axiosPrivate, location, navigate]);

    return (
        <div className='flex flex-col'>
            <div className='bg-pink-700 px-2 py-4 border-r-2 border-pink-800 flex justify-between items-center h-[10vh] space-x-2'>
                <p className='hidden md:block text-white text-base font-light max-w-[17ch] truncate'>
                    Emma Saez
                </p>
                <button className='text-white text-base font-light'>
                    Salir
                </button>
            </div>
            <div className='bg-gray-50 h-[80vh] min-w-min max-w-xs border-r-2 border-gray-200 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-400'>
                {
                    chats && chats.map(chat => (
                        <SidebarChat key={chat._id} chat={chat} />

                    ))
                }
            </div>
        </div>
    )
};

export default Sidebar;