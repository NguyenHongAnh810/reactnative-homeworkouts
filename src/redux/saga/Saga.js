import { call } from 'react-native-reanimated';
import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {LoginApi} from '../../api/LoginApi'
import {TYPES} from './../actions/Action'

function* fetchUser(action) {
   try {
      yield put({type: TYPES.LOADING});
      const response = yield LoginApi(action.params)
      yield put({type: TYPES.LOGIN_SUCCESS, response});
      yield put({type: TYPES.LOADED});
   } catch (e) {
      yield put({type: TYPES.LOADED});
      alert("Đăng nhập không thành công")
      console.log('login failted: ', e);
   }
}

// function* mySaga() {
//   yield takeLatest(TYPES.LOGIN_REQUEST, fetchUser);
// }


export default 
[
   takeLatest(TYPES.LOGIN_REQUEST, fetchUser),
]
// mySaga;