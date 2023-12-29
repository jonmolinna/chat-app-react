import React from 'react';
import Avatar from './Avatar';
import moment from 'moment';
import 'moment/locale/es';
import { CapitalizeLetter } from '../utils/capitalize.letter';

const SidebarChat = ({ user }) => {
    let date = user?.messages?.createdAt || user?.createdAt;
    let message = user?.messages?.message || `Escribele un mensaje a ${CapitalizeLetter(user.name)}`;

    return (
        <div className='flex justify-center space-x-2 px-3 py-2 border-b-2 border-gray-300 cursor-pointer hover:bg-gray-200'>
            <Avatar name={user.name} />
            <div className='hidden md:flex flex-1 flex-col'>
                <div className='flex justify-between items-center space-x-2'>
                    <p className='text-base font-normal max-w-[17ch] truncate'>
                        {CapitalizeLetter(user.name)}
                    </p>
                    <span className='text-xs font-medium text-gray-500'>
                        {moment(date).add(10, 'days').calendar()}
                    </span>
                </div>
                <p className='text-sm text-gray-900 max-w-[30ch] truncate'>
                    {message}
                </p>
            </div>
        </div>
    )
};

export default SidebarChat;