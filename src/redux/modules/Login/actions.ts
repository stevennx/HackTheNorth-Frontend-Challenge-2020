import { Credentials, LoginActionType, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "./types";

const validateCredentials = ({ email, password } : Credentials) => (
    email === "alex@hackthenorth.com" && password === "ImNotAMeme"
)
const initialState = {
    email: '',
    password: ''
}
export default (credentials: Credentials): LoginActionType => (
    validateCredentials(credentials) ? {
        type: LOGIN_USER_SUCCESS,
        payload: {
            credentials: credentials,
            errorMessage: null
        }
    } : {
        type: LOGIN_USER_ERROR,
        payload: {
            credentials: initialState,
            errorMessage: 'Invalid credentials'
        }
    }
)
