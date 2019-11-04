import {
    signUp,
    logout,
    login
} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVECURRENTUSER";
export const LOGOUT_CURRENT_USER = "LOGOUTCURRENTUSER";
export const RECEIVE_SESSION_ERRORS = "RECEIVESESSIONERRORS";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const createUser = user => dispatch => signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)));

export const loginUser = user => dispatch => login(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)));

export const logoutUser = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser()));

