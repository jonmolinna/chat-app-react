import React, { useEffect, useState } from 'react';
import Message from './Message';
import { useUsersState } from '../context/users.context';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';

const ChatMessages = () => {
    const [messages, setMessages] = useState([])
    const { user } = useUsersState();
    const axiosPrivate = useAxiosPrivate();
    let to = user?._id;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;

        const getAllMessageByTo = async () => {
            try {
                const res = await axiosPrivate.get('/getAllMessageByTo', { params: { to } });
                isMounted && setMessages(res.data.data);
            } catch (err) {
                navigate('/login', { state: { from: location }, replace: true });
            }
        };

        getAllMessageByTo();

        return () => {
            isMounted = false;
        }

    }, [axiosPrivate, to, location, navigate]);

    return (
        <div className='p-4 space-y-2'>
            {
                messages.length > 0 ? messages.map(message => (
                    <Message />
                )) : (
                    <div>
                        <p>No tienes messages</p>
                    </div>
                )
            }
        </div>
    )
};

export default ChatMessages;