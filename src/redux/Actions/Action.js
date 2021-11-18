export const TYPES = {
  LOGIN_REQUEST: 'ACCOUNT_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'ACCOUNT_LOGIN_SUCCESS',

  LOGOUT_REQUEST: 'ACCOUNT_LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'ACCOUNT_LOGOUT_SUCCESS',

  LOADING: 'LOADING',
  LOADED: 'LOADED',
};

export function loginSuccess () {
  return{
    type: TYPES.LOGIN_REQUEST
  }
};

export const logoutSuccess = (params) =>{
  type: TYPES.LOGOUT_SUCCESS
};