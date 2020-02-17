export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export interface Credentials {
  email: string;
  password: string;
}

export interface Request {
    errorMessage: string | null
}

export type LoginActionType = {
  type: typeof LOGIN_USER_SUCCESS | typeof LOGIN_USER_ERROR;
  payload: Request;
};
