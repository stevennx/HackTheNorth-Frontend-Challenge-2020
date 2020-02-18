import { combineReducers } from "redux";
import userLogin from "../modules/Login/reducers";
import userProfile from "../modules/Profile/reducers";
export default combineReducers({ userLogin, userProfile });
