import useAuth from '../hooks/useAuth';

// Is Use Refresh Token
const useToken = () => {
    const { useLoginDispatch } = useAuth();
    const dispatch = useLoginDispatch();
    const userString = localStorage.getItem('tokens');
    const user = JSON.parse(userString);


    const getToken = () => {
        dispatch({ type: 'REFRESH_TOKEN', payload: user })
        // return auth?.token;
        return user;

    }
    return getToken;
}

export default useToken;