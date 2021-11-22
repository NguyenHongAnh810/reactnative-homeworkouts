import { call } from 'react-native-reanimated';
import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {LoginApi} from '../../api/LoginApi'
import {RegisterApi} from '../../api/RegisterApi'
import {TYPES} from './../actions/Action'

import AsyncStorage from '@react-native-async-storage/async-storage';

function* fetchUser(action) {
   try {
      yield put({type: TYPES.LOADING});
      if(action.params.identifier != ''&&action.params.password != ''){
      const response = yield LoginApi(action.params)
      yield put({type: TYPES.LOGIN_SUCCESS, response: response.user});
      yield AsyncStorage.setItem('idUser', JSON.stringify(response.user.id))
      yield put({type: TYPES.LOADED});
      
      } else {
         throw 'Tên và mật khẩu rỗng'
      }
   } catch (e) {
      yield put({type: TYPES.LOADED});
      alert("Đăng nhập không thành công")
      console.log('login failteddddddd: ', e);
   }
}

function* CallRegister(action) {
   try {
      yield put({type: TYPES.LOADING});
      const response = yield RegisterApi(action.params)
      yield put({type: TYPES.REGISTER_SUCCESS, response: response, navigation: action.navigation});
      yield put({type: TYPES.LOADED});
   } catch (e) {
      yield put({type: TYPES.LOADED});
      alert("Đăng kí không thành công")
      console.log('register failted: ', e);
   }
}


export default 
[
   takeLatest(TYPES.LOGIN_REQUEST, fetchUser),
   takeLatest(TYPES.REGISTER_REQUEST, CallRegister),

]
// mySaga;