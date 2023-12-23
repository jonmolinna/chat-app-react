import { useEffect } from 'react';
import { axiosPrivate } from '../utils/axios';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
    const { useLoginState } = useAuth();
    const { auth } = useLoginState();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
        }

    }, [auth])

    return axiosPrivate;
};

export default useAxiosPrivate;