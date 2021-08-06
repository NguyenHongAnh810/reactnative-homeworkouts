import {decrease_u, increase_u, login_u, logout_u} from './action';

export const initalState = {
  count: 1,
};

function myReducer(state = initalState, action) {
  switch (action.type) {
    case increase_u:
      state.count = state.count + 1;
      return state;
    case decrease_u:
      state.count = state.count - 1;
      return state;
    default:
      return state;
  }
}

export default myReducer;
