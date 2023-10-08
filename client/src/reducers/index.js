import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

// creating and object and combining the reducer inside this combineRecuders Function
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
});
