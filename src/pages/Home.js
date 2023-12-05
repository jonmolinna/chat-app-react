import React from 'react';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className='max-w-5xl mx-auto h-[100vh] grid place-items-center'>
            <div className='h-[90vh] shadow-md'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                        <Sidebar />
                    </div>
                    <div className='col-span-8'>
                        <Chat />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;