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
            return {
                loading: false,
                auth: action.payload,
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
        case 'LOGOUT': {
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