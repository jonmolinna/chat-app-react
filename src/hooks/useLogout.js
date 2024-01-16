import useAuth from './useAuth';
import { useUsersDispatch } from '../context/users.context';
import { useNavigate, useLocation } from 'react-router-dom';

const useLogout = () => {
    const { useLoginDispatch } = useAuth();
    const authDispatch = useLoginDispatch();
    const usersDispatch = useUsersDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        authDispatch({ type: 'LOGOUT' });
        usersDispatch({ type: 'RESET_USERS' });

        navigate('/login', { state: { from: location }, replace: true });
    }

    return logout;
}

export default useLogout;