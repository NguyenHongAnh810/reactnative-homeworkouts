import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import myReducer from "./Reducer"

const store = createStore(myReducer)

export default store
