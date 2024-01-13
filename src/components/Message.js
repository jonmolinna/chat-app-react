import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import useAuth from '../hooks/useAuth';

const Message = ({ message }) => {
    const { useLoginState } = useAuth();
    const { auth } = useLoginState();
    let isUsername = message.from === auth?.user.id;

    return (
        <p className={`message ${isUsername && 'message__recived'}`}>
            {message.message}
            <span className='ml-2 text-xs'>
                {moment(message.createdAt).format('l @ LT')}
            </span>
        </p>
    )
};

export default Message;