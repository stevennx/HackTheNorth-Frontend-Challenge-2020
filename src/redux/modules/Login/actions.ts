import {
  Credentials,
  LoginActionType,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  ActionParams
} from "./types";

const validateCredentials = ({ email, password }: Credentials) =>
  email === "a" && password === "b";

export default ({ email, password, history } : ActionParams): LoginActionType => {
  const credentials = { email: email, password: password }
  if (validateCredentials(credentials)) {
    // history.push("/profile")
    return {
      type: LOGIN_USER_SUCCESS,
      payload: {
        errorMessage: null
      }
    };
  } else {
    // history.push("/login");
    return {
      type: LOGIN_USER_ERROR,
      payload: {
        errorMessage: "Invalid credentials"
      }
    };
  }
};
