import { all } from "redux-saga/effects";
import { watchFireErrorAlert } from "../modules/ErrorAlert/sagas";
import { watchLoginErrorAlert } from "../modules/Login/sagas";
import { watchGetProfileRequest, watchGetProfileFailure } from "../modules/Profile/sagas";
import { watchFireRippleEffect } from "../modules/Background/sagas";


export default function* rootSaga() {
  yield all([
    watchLoginErrorAlert(),
    watchFireErrorAlert(),
    watchGetProfileRequest(),
    watchGetProfileFailure(),
    watchFireRippleEffect()
  ]);
}
