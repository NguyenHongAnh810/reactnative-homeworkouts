import {call, all, put, takeEvery, takeLatest} from 'redux-saga/effects';
import rateApi from '../api/rateApi';

function* fetchUser(action) {
  try {
    const response = yield rateApi.getAll();
    if(response['success'] == true){
    yield put({type: 'USER_FETCH_SUCCEEDED', data : response['quotes']});
    } else {
      yield put({type: 'USER_FETCH_FAILED', error : e.e});
    }
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED', error : e.e});
  }
}

function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
  console.log('mysaga');
}

export default function* rootSaga() {
  yield all([mySaga()]);
}
