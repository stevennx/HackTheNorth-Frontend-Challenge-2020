import { HttpError } from "http-errors";

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST'
export const GET_PROFILE_SUCCESS= 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE'

export type AttendeeType = "hacker" | "organizer" | "volunteer" | "sponsor";

export type Action = "check_in" | "attend_workshop" | "call_phone";

export interface AttendeeProfile {
  id: number;
  name: string;
  profile_pic: string; // a url to an image
  bio?: string; // a paragraph describing the attendee
  type: AttendeeType;
  checked_in: boolean;
  actions: Action[];
  num_workshops_attended?: number; // all "hacker" type attendees (and no other types) will have this field
  sponsor_company?: string; // all "sponsor" type attendees (and no other types) will have this field
  sponsor_company_link?: string; // all "sponsor" type attendees (and no other types) will have this field
  next_shift?: number; // datetime (ms); all "volunteer" type attendees (and no other types) will have this field
  phone_number?: string; // all "organizer" type attendees (and no other types) will have this field
}

export type EndpointResponse = AttendeeProfile | null;

export type ProfileActionType = {
    type: typeof GET_PROFILE_REQUEST | typeof GET_PROFILE_SUCCESS | typeof GET_PROFILE_FAILURE,
    payload: {
        isFetching: boolean,
        profile?: EndpointResponse
        errorMessage?: string
    }
}