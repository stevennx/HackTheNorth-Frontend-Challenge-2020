import { call, takeEvery } from "redux-saga/effects";
import { FIRE_ERROR_ALERT, ErrorAlertActionType} from "./types";
import Swal from "sweetalert2";

export function* fireErrorAlert(action: ErrorAlertActionType) {
  yield call(() =>
    Swal.fire({
      icon: "error",
      title: action.payload.errorMessage,
      text: "Something went wrong!"
    })
  );
}

export function* watchFireErrorAlert() {
  yield takeEvery(FIRE_ERROR_ALERT, fireErrorAlert);
}
