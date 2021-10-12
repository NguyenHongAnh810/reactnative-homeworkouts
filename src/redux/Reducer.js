import {
    Login_u,
    Logout_u
  } from './Action';
  
  export const initalState = {
    isLogin: false
  };
  
  function myReducer(state = initalState, action) {
    switch (action.type) {
      case Login_u:
        state.isLogin = true;
        return state;
      case Logout_u:
        state.isLogin = false;
        return state;
      default:
        return state;
    }
  }
  
  export default myReducer;