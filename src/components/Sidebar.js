import React, { useEffect } from 'react';
import SidebarChat from './SidebarChat';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUsersDispatch, useUsersState } from '../context/users.context';
import useAuth from '../hooks/useAuth';
import { CapitalizeLetter } from '../utils/capitalize.letter';
import useLogout from '../hooks/useLogout';
import Pusher from 'pusher-js';

const pusher = new Pusher(
    '4d05166e3649e2a2ed3f',
    {
        cluster: 'us2'
    },
);

const Sidebar = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useUsersDispatch();
    const { users } = useUsersState();
    const { useLoginState } = useAuth();
    const { auth } = useLoginState();
    const logout = useLogout();
    let { name } = auth?.user;

    useEffect(() => {
        let isMounted = true;

        const getUsersChats = async () => {
            try {
                const res = await axiosPrivate.get('/users');
                isMounted && dispatch({ type: 'GET_ALL_USERS_SUCCESS', payload: res.data.users })
            } catch (error) {
                navigate('/login', { state: { from: location }, replace: true })
            }
        };

        getUsersChats();

        const channel = pusher.subscribe('messages');
        channel.bind('newMessage', function (data) {
            getUsersChats();
        });

        return () => {
            isMounted = false;
        }
    }, [axiosPrivate, location, navigate, dispatch]);

    return (
        <div className='flex flex-col'>
            <div className='bg-pink-700 px-2 py-4 border-r-2 border-pink-800 flex justify-between items-center h-[10vh] space-x-2'>
                <p className='hidden md:block text-white text-base font-light max-w-[17ch] truncate'>
                    {CapitalizeLetter(name)}
                </p>
                <button className='text-white text-base font-light' onClick={() => logout()}>
                    Salir
                </button>
            </div>
            <div className='bg-gray-50 h-[80vh] min-w-min max-w-xs border-r-2 border-gray-200 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-400'>
                {
                    users && users.map(user => (
                        <SidebarChat key={user._id} user={user} />
                    ))
                }
            </div>
        </div>
    )
};

export default Sidebar;