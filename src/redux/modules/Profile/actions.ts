import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  EndpointResponse,
  ProfileActionType
} from "./types";

export const requestProfile = (): ProfileActionType => ({
  type: GET_PROFILE_REQUEST,
  payload: {
    isFetching: true
  }
});

export const receiveProfileSuccess = (
  profile: EndpointResponse
): ProfileActionType => ({
  type: GET_PROFILE_SUCCESS,
  payload: {
    isFetching: false,
    profile: profile
  }
});

export const receiveProfileError = (error: string): ProfileActionType => ({
  type: GET_PROFILE_FAILURE,
  payload: {
    isFetching: false,
    profile: null, 
    errorMessage: error
  }
});
