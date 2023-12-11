import React from 'react';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
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
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
};

export default Sidebar;