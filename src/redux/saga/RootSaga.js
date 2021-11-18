import mySaga from './Saga'
import { all, takeEvery } from '@redux-saga/core/effects'

export default function* rootSaga() {
    yield all([
      takeEvery('*', getInfoAction),
      ...mySaga])
  }

function* getInfoAction(action) {
  console.log("**action: ", JSON.stringify(action))
}