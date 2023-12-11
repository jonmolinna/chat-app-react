import React from 'react';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className='h-[100vh] pt-5'>
            <div className='flex w-full h-[90vh] max-w-5xl mx-auto shadow-md rounded-md overflow-hidden'>
                <Sidebar />
                <Chat />
            </div>
        </div >
    )
};

export default Home;