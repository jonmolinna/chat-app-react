import { createContext, useContext, useReducer } from 'react';
import usersReducer from './users.reducer';

const UsersStateContext = createContext();
const UsersDispatchContext = createContext();

const initialState = {
    loading: false,
    users: null,
    errors: null,
    user: null,
};

export const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, initialState);

    return (
        <UsersDispatchContext.Provider value={dispatch}>
            <UsersStateContext.Provider value={state}>
                {children}
            </UsersStateContext.Provider>
        </UsersDispatchContext.Provider>
    )
};

export const useUsersState = () => useContext(UsersStateContext);
export const useUsersDispatch = () => useContext(UsersDispatchContext);