import React from 'react';
import { FiMessageCircle } from "react-icons/fi";
import useAuth from '../hooks/useAuth';
import { CapitalizeLetter } from '../utils/capitalize.letter';

const Welcome = () => {
    const { useLoginState } = useAuth();
    const { auth } = useLoginState();
    let isAuth = auth?.user;

    return (
        <div className='flex-1'>
            <div className='flex flex-col items-center pt-16'>
                <FiMessageCircle className='h-20 w-20 text-pink-700' />
                <div className='mt-5'>
                    <p className='text-3xl font-normal text-center'>Bienvenido</p>
                    <p className='text-center text-xl font-light'>
                        {CapitalizeLetter(isAuth.name)}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Welcome;