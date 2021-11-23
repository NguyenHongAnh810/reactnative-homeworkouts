import { call } from 'react-native-reanimated';
import { put, takeLatest } from 'redux-saga/effects'
import {GetListFoodApi} from '../../api/GetListFoodApi'
import { GetIdFoodSaveApi } from '../../api/GetIdFoodSaveApi';
import {TYPES} from './../actions/ActionFetchList'

function* fetchMyFood(action) {
   try {
      const response = yield GetListFoodApi(action.params)
      yield put({type: TYPES.FETCH_MYFOODLIST_SUCCESS, response: response});
   } catch (e) {
      alert("Tải dữ liệu thất bại")
      console.log('fetch list my food failted: ', e);
   }
}

function* fetchFoodSave(action) {
    try {

      const response = yield GetIdFoodSaveApi(action.params)
      console.log(`idFoodSave`, response)
      if(response[0]) {
      const subParams = response.map(element => {
         return `id_in=${element.idFoodsave}`
      }).join("&");
       const response1 = yield GetListFoodApi(null, subParams)
       yield put({type: TYPES.FETCH_FOODSAVELIST_SUCCESS, response: response1});
   }
    } catch (e) {
       alert("Tải dữ liệu thất bại")
       console.log('fetch list save food failted: ', e);
    }
 }

 function* fetchNewFood(action) {
    try {
       const response = yield GetListFoodApi(action.params)
       yield put({type: TYPES.FETCH_NEWFOODLIST_SUCCESS, response: response});
    } catch (e) {
       alert("Tải dữ liệu thất bại")
       console.log('fetch list new food failted: ', e);
    }
 }

 function* fetchSetFood(action) {
    try {
       const response = yield GetListFoodApi(action.params)
       yield put({type: TYPES.FETCH_SETFOODLIST_SUCCESS, response: response});
    } catch (e) {
       alert("Tải dữ liệu thất bại")
       console.log('fetch list set food failted: ', e);
    }
 }

 function* fetchSpecialFood(action) {
    try {
       const response = yield GetListFoodApi(action.params)
       yield put({type: TYPES.FETCH_SPECIALFOODLIST_SUCCESS, response: response});
    } catch (e) {
       alert("Tải dữ liệu thất bại")
       console.log('fetch list special food failted: ', e);
    }
 }

 function* fetchTopFood(action) {
    try {
       const response = yield GetListFoodApi(action.params)
       yield put({type: TYPES.FETCH_TOPFOODLIST_SUCCESS, response: response});
    } catch (e) {
       alert("Tải dữ liệu thất bại")
       console.log('fetch list top food failted: ', e);
    }
 }

export default 
[
   takeLatest(TYPES.FETCH_FOODSAVELIST_REQUEST, fetchFoodSave),
   takeLatest(TYPES.FETCH_MYFOODLIST_REQUEST, fetchMyFood),
   takeLatest(TYPES.FETCH_NEWFOODLIST_REQUEST, fetchNewFood),
   takeLatest(TYPES.FETCH_SETFOODLIST_REQUEST, fetchSetFood),
   takeLatest(TYPES.FETCH_SPECIALFOODLIST_REQUEST, fetchSpecialFood),
   takeLatest(TYPES.FETCH_TOPFOODLIST_REQUEST, fetchTopFood),

]
// mySaga;