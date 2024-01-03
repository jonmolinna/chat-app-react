import React, { useEffect } from 'react';
import SidebarChat from './SidebarChat';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUsersDispatch, useUsersState } from '../context/users.context';

const Sidebar = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useUsersDispatch();
    const { users } = useUsersState();

    useEffect(() => {
        let isMounted = true;

        const getUsersChats = async () => {
            try {
                dispatch({ type: 'GET_ALL_USERS_START' });
                const res = await axiosPrivate.get('/users');
                isMounted && dispatch({ type: 'GET_ALL_USERS_SUCCESS', payload: res.data.users })
            } catch (error) {
                navigate('/login', { state: { from: location }, replace: true })
            }
        };

        getUsersChats();

        return () => {
            isMounted = false;
        }
    }, [axiosPrivate, location, navigate, dispatch]);

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
                    users && users.map(user => (
                        <SidebarChat key={user._id} user={user} />

                    ))
                }
            </div>
        </div>
    )
};

export default Sidebar;