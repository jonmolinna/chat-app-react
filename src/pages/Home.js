import React from 'react';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';
import Welcome from '../components/Welcome';
import { useUsersState } from '../context/users.context';

const Home = () => {
    const { user } = useUsersState();

    return (
        <div className='h-[100vh] pt-5'>
            <div className='flex w-full h-[90vh] max-w-5xl mx-auto shadow-md rounded-md overflow-hidden'>
                <Sidebar />
                {
                    user ? <Chat /> : <Welcome />
                }
            </div>
        </div >
    )
};

export default Home;