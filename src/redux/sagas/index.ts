import { all } from "redux-saga/effects";
import { watchFireErrorAlert } from "../modules/ErrorAlert/sagas";
import { watchLoginErrorAlert } from "../modules/Login/sagas";
import { watchGetProfileRequest } from "../modules/Profile/sagas";

export default function* rootSaga() {
  yield all([
    watchLoginErrorAlert(),
    watchFireErrorAlert(),
    watchGetProfileRequest()
  ]);
}
