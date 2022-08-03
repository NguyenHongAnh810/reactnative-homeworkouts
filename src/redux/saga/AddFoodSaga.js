import {call} from 'react-native-reanimated';
import {put, takeEvery, takeLatest} from 'redux-saga/effects';
import {UploadImageApi} from '../../api/UploadImageApi';
import {AddFoodApi} from '../../api/AddFoodApi';
import {TYPES} from './../actions/AddFoodAction';


function* addFood(action) {
  try {
    const formData = new FormData();
    const imagefile = document.querySelector('#file');
    action.params.images.map((e)=>{
      formData.append('files', imagefile);
    })
    const res = yield uploadImages(formData)
    // yield put({type: TYPES.UPLOAD_IMAGE_REQUEST, formData: formData});
  } catch (e) {
    alert(e);
    console.log('addrecipe failteddddd: ', e);
  }
}

function* uploadImages(action) {
  try {
    
  } catch (e) {
    alert(e);
    console.log('register failted: ', e);
  }
}

export default [
  takeLatest(TYPES.ADDFOOD_REQUEST, addFood),
  takeLatest(TYPES.UPLOAD_IMAGE_REQUEST, uploadImages),
];
// mySaga;
