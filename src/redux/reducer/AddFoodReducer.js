import {TYPES} from './../actions/AddFoodAction';
import { Alert } from 'react-native';

export const initalState = {
  food: {}
};

function myReducer(state = initalState, action) {
  switch (action.type) {
    case TYPES.ADDFOOD_SUCCESS:
      return {...state};
    default:
      return {...state};
  }
}

export default myReducer;
