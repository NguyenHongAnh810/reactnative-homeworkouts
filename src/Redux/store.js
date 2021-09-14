import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import myReducer from './Reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(myReducer, 
    applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(rootSaga);

export default store;
