// import { createContext, useContext, useReducer } from 'react';
import { createContext, useReducer } from 'react';
import loginReducer from './login.reducer';

// const LoginStateContext = createContext();
// const LoginDispatchContext = createContext();

export const LoginDispatchContext = createContext();
export const LoginStateContext = createContext();

const initialState = {
    loading: false,
    auth: null,
    errors: null
};

export const LoginProvider = ({ children }) => {
    const [state, dispatch] = useReducer(loginReducer, initialState);

    return (
        <LoginDispatchContext.Provider value={dispatch}>
            <LoginStateContext.Provider value={state}>
                {children}
            </LoginStateContext.Provider>
        </LoginDispatchContext.Provider>
    )
};

// export const useLoginState = () => useContext(LoginStateContext);
// export const useLoginDispatch = () => useContext(LoginDispatchContext);
