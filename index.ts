import { combineReducers } from "redux";
import DisplayReducer from "./screen/Login/Login-reducer";

export default combineReducers({
    display:DisplayReducer,
});