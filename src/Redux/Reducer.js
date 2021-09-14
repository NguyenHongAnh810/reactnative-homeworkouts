import {
  decrease_u,
  increase_u,
  USER_FETCH_SUCCEEDED_u,
  USER_FETCH_FAIL_u,
} from './action';

export const initalState = {
  count: 1,
  listRate: [],
};

function myReducer(state = initalState, action) {
  switch (action.type) {
    case increase_u:
      state.count = state.count + 1;
      return state;
    case decrease_u:
      state.count = state.count - 1;
      return state;
    case USER_FETCH_SUCCEEDED_u:
        console.log('get list successfull');
        let datas = Object.keys(action.data).map(key => {
          return { id: key, title: action.data[key] };
        })
        state.listRate = datas;
        return Object.assign({}, state, {response: data});
    case USER_FETCH_FAIL_u:
      state.listRate = "get request failled";
      console.log('get list failled');
      return state;
    default:
      return state;
  }
}

export default myReducer;
