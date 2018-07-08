import { EMAIL_CHANGED , PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    pass: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case EMAIL_CHANGED:
                return { ...state, email: action.payload }; //created new object here
        case PASSWORD_CHANGED:
                return { ...state, pass: action.payload };
        case LOGIN_USER:
                return { ...state, loading: true, error: '' }
        case LOGIN_USER_SUCCESS:
                return { ...state, 
                         ...INITIAL_STATE,
                        user: action.payload, 
                        };
        case LOGIN_USER_FAIL:
                return { ...state, error: 'Authentication Failed.', pass: '', loading: false};
        default:
            return state;
    }
};