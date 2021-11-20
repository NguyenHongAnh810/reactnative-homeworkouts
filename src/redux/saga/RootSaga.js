import mySaga from './Saga';
import SagaFetchList from './SagaFetchList';
import AddFoodSaga from './AddFoodSaga';
import {all, takeEvery} from '@redux-saga/core/effects';

export default function* rootSaga() {
  yield all([
    takeEvery('*', getInfoAction),
    ...mySaga,
    ...SagaFetchList,
    ...AddFoodSaga,
  ]);
}

function* getInfoAction(action) {
  console.log('**action: ', JSON.stringify(action));
}
