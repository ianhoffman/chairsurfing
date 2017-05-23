import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const login = (user)=> dispatch => {
  return SessionAPIUtil.login(user).then(
    res => dispatch(receiveCurrentUser(res)),
    err => dispatch(receiveUserErrors(err.responseJSON))
  );
};

export const logout = ()=> dispatch => {
  return SessionAPIUtil.logout().then(
    res => {
      dispatch(receiveCurrentUser(null));
      return res;
    },
    err => dispatch(receiveUserErrors(err.responseJSON))
  );
};

export const signup = user => dispatch =>{
  return SessionAPIUtil.signup(user).then(
    res => dispatch(receiveCurrentUser(res)),
    err => dispatch(receiveUserErrors(err.responseJSON))
  );
};

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
