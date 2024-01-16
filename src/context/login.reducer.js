const loginReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START': {
            return {
                loading: true,
                auth: null,
                errors: null
            }
        }
        case 'LOGIN_SUCCESS': {
            const auth = action.payload
            if (auth) {
                localStorage.setItem('tokens', JSON.stringify(auth));
            }
            return {
                loading: false,
                auth,
                errors: null,
            }
        }
        case 'LOGIN_FAILURE': {
            return {
                loading: false,
                auth: null,
                errors: action.payload,
            }
        }
        case 'REFRESH_TOKEN': {
            return {
                ...state,
                auth: action.payload
            }
        }
        case 'LOGOUT': {
            localStorage.removeItem('tokens');
            return {
                loading: false,
                auth: null,
                errors: null
            }
        }
        default:
            return state
    }
};

export default loginReducer;