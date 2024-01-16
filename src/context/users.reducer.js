const usersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS_START': {
            return {
                ...state,
                loading: true,
                users: null,
                errors: null,
            }
        }
        case 'GET_ALL_USERS_SUCCESS': {
            return {
                ...state,
                loading: false,
                users: action.payload,
                errors: null,
            }
        }
        case 'GET_ALL_USERS_FAILURE': {
            return {
                ...state,
                loading: false,
                users: null,
                errors: action.payload,
            }
        }
        case 'ADD_USER_TO_CHAT': {
            return {
                ...state,
                user: action.payload,
            }
        }
        case 'RESET_USERS': {
            return {
                loading: false,
                users: null,
                errors: null,
                user: null,
            }
        }
        default:
            return state
    }
};

export default usersReducer;