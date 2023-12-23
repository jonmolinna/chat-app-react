import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useToken from '../hooks/useToken';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { useLoginState } = useAuth();
    const { auth } = useLoginState();
    const token = useToken();

    useEffect(() => {
        let isMounted = true;

        const verifyToken = () => {
            try {
                token();
            } catch (err) {
                console.log('error', err)
            }
            finally {
                isMounted && setIsLoading(false);
            }
        };

        // !auth?.token ? verifyToken() : setIsLoading(false);
        !auth ? verifyToken() : setIsLoading(false);

        return () => isMounted = false;
    }, [token, auth])


    return (
        <>
            {
                isLoading ?
                    <p>Loading</p>
                    : <Outlet />
            }
        </>
    )
};

export default PersistLogin;