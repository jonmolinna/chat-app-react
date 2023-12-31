import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
    const location = useLocation();
    const { useLoginState } = useAuth();
    const { auth } = useLoginState();

    return (
        auth ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth;