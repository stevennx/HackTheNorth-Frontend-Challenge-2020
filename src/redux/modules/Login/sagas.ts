import { put, takeEvery } from "redux-saga/effects";
import { LOGIN_USER_ERROR, LoginActionType} from "./types";
import errorAlertAction from '../ErrorAlert/actions'

export function* loginErrorAlert(action: LoginActionType) {
  yield put(errorAlertAction(action.payload.errorMessage || ''))
}

export function* watchLoginErrorAlert() {
  yield takeEvery(LOGIN_USER_ERROR, loginErrorAlert);
}
