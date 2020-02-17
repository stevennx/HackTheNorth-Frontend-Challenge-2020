import {
  Credentials,
  LoginActionType,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
} from "./types";

const validateCredentials = ({ email, password }: Credentials) =>
  email === "a" && password === "b";

export default (credentials: Credentials): LoginActionType =>
  validateCredentials(credentials)
    ? {
        type: LOGIN_USER_SUCCESS,
        payload: {
          errorMessage: null
        }
      }
    : {
        type: LOGIN_USER_ERROR,
        payload: {
          errorMessage: "Invalid credentials"
        }
      };
