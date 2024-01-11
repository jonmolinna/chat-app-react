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

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => {
                // console.log(response.config.data)
                return response
            }
            // response => response
        )

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }

    }, [auth])

    return axiosPrivate;
};

export default useAxiosPrivate;