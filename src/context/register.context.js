import { createContext, useContext, useReducer } from 'react';
import registerReducer from './register.reducer';

const RegisterStateContext = createContext();
const RegisterDispatchContext = createContext();

const initialState = {
    loading: false,
    register: false,
    errors: null,
};

export const RegisterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(registerReducer, initialState);

    return (
        <RegisterDispatchContext.Provider value={dispatch}>
            <RegisterStateContext.Provider value={state}>
                {children}
            </RegisterStateContext.Provider>
        </RegisterDispatchContext.Provider>
    )
};

export const useRegisterState = () => useContext(RegisterStateContext);
export const useRegisterDispatch = () => useContext(RegisterDispatchContext);