import {TYPES} from './../actions/ActionFetchList';
import {Alert} from 'react-native';

export const initalState = {
  myFood: [],
  foodSave: [],
  newFood: [],
  setFood: [],
  specialFood: [],
  topFood: [],
};

function myListReducer(state = initalState, action) {
  switch (action.type) {
    case TYPES.FETCH_FOODSAVELIST_SUCCESS:
      state.foodSave = action.response;
      return {...state};
    case TYPES.FETCH_MYFOODLIST_SUCCESS:
      console.log("Myfoodreducerresponse", action.response)
      state.myFood = action.response
      console.log("Myfoodreducer", state.myFood)
      return {...state};
    case TYPES.FETCH_NEWFOODLIST_SUCCESS:
      let arr = state.newFood;
      arr = arr.concat(action.response)
      state.newFood = arr;
      // state.newFood = action.response
      return {...state};
    case TYPES.FETCH_SETFOODLIST_SUCCESS:
      state.setFood = action.response;
      return {...state};
    case TYPES.FETCH_SPECIALFOODLIST_SUCCESS:
      state.specialFood = action.response;
      return {...state};
    case TYPES.FETCH_TOPFOODLIST_SUCCESS:
      state.topFood = action.response;
      return {...state};
    default:
      return {...state};
  }
}

export default myListReducer;
