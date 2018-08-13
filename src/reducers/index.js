import { combineReducers } from "redux";

import Auth from "./auth";
import Language from "./language";
import workData from "./workReducer";
import recoveryPasswordData from "./recoveryPassword";

export default combineReducers({
  Auth,
  Language,
  workData,
  recoveryPasswordData
});