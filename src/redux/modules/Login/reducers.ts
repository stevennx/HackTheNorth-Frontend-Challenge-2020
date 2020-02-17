import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "./types";
import { LoginActionType } from "./types";

export default (state = {}, action: LoginActionType) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
