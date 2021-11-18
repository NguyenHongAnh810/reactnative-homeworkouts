import {TYPES} from './../actions/Action';

export const initalState = {
  isLogin: false,
  loading: false,
};

function myReducer(state = initalState, action) {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      state.isLogin = true;
      return {...state};
    case TYPES.LOGOUT_SUCCESS:
      state.isLogin = false;
      return {...state};
    case TYPES.LOADING:
      state.loading = true;
      return {...state};
    case TYPES.LOADED:
      state.loading = false;
      return {...state};
    default:
      return {...state};
  }
}

export default myReducer;
