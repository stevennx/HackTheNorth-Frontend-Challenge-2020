import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, Credentials } from "./types";
import { LoginActionType } from "./types";
import { get } from "lodash";

const initialState: Credentials = {
  email: "",
  password: ""
};

export default (state = initialState, action: LoginActionType) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        credentials: get(action,'payload.credentials', null),
        errorMessage: get(action, 'payload.errorMessage', null),
        loggedIn: true
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        credentials: get(action,'payload.credentials', null),
        errorMessage: get(action, 'payload.errorMessage', null),
        loggedIn: false
      };
    default:
      return state;
  }
};
