import {TYPES} from './Action';

export const initalState = {
  isLogin: false,
  // content: ['','']
};

function myReducer(state = initalState, action) {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      state.isLogin = true;
      return {...state};
    case TYPES.LOGOUT_SUCCESS:
      state.isLogin = false;
      return {...state};
    default:
      return state;
  }
}

export default myReducer;
