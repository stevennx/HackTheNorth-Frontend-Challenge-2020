import { all } from 'redux-saga/effects';
import { watchFireErrorAlert } from  '../modules/ErrorAlert/sagas'
import { watchLoginErrorAlert } from '../modules/Login/sagas'
  
export default function* rootSaga() {
  yield all([
    watchLoginErrorAlert(),
    watchFireErrorAlert()
  ]);
}