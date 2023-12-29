const usersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS_START': {
            return {
                loading: true,
                users: null,
                errors: null,
            }
        }
        case 'GET_ALL_USERS_SUCCESS': {
            return {
                loading: false,
                users: action.payload,
                errors: null,
            }
        }
        case 'GET_ALL_USERS_FAILURE': {
            return {
                loading: false,
                users: null,
                errors: action.payload,
            }
        }
        case 'GET_ALL_USERS_RESET': {
            return {
                loading: false,
                users: null,
                errors: null,
            }
        }
        default:
            return state
    }
};

export default usersReducer;