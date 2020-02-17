import {
    FIRE_ERROR_ALERT,
    ErrorAlertActionType
  } from "./types";

export default (errorMessage: string) : ErrorAlertActionType => ({
    type: FIRE_ERROR_ALERT,
    payload: {
        errorMessage
    }
})