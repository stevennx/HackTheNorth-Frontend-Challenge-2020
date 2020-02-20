import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_ERROR,
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
    profile: profile,
    errorMessage: null
  }
});

export const receiveProfileFailure = () : ProfileActionType => ({
  type: GET_PROFILE_FAILURE,
  payload: {
    isFetching: false,
    profile: null,
    errorMessage: null
  }
})

export const receiveProfileError = (error: string): ProfileActionType => ({
  type: GET_PROFILE_ERROR,
  payload: {
    isFetching: false,
    profile: null, 
    errorMessage: error
  }
});
