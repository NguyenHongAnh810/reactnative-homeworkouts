import {combineReducers} from 'redux';
import auth from './Reducer';
import product from './ReducerFetchList';
import addFood from './AddFoodReducer';

const rootReducer = combineReducers({auth, product, addFood});

export default rootReducer;
