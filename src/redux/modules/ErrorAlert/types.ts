export const FIRE_ERROR_ALERT = "FIRE_ERROR_ALERT";

export interface Request {
    errorMessage: string 
}

export type ErrorAlertActionType = {
  type: typeof FIRE_ERROR_ALERT
  payload: Request;
};