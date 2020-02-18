import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  ProfileActionType
} from "./types";

export default (state = {}, action: ProfileActionType) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
