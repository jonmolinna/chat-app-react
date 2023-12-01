import { useContext } from 'react';
import { LoginDispatchContext, LoginStateContext } from '../context/login.context';

const useAuth = () => {
    const useLoginState = () => useContext(LoginStateContext);
    const useLoginDispatch = () => useContext(LoginDispatchContext);

    return { useLoginState, useLoginDispatch };
};

export default useAuth;