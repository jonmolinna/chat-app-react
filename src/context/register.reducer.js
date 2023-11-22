const registerReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_START': {
            return {
                loading: true,
                register: false,
                errors: null,
            }
        }
        case 'REGISTER_SUCCESS':
            return {
                loading: false,
                register: true,
                errors: null,
            }
        case 'REGISTER_FAILURE': {
            return {
                loading: false,
                register: false,
                errors: action.payload,
            }
        }
        default:
            return state
    }
};

export default registerReducer;