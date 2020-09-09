import { combineReducers } from "redux";
import constants from "./constantsTypes";

const initialState = {
  email: "",
  token: "",
};

const authReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case constants.AUTH_REQUEST:
      return { ...state };

    case constants.AUTH_SUCCESS:
      return { ...state, ...payload };

    case constants.LOGOUT_SUCCESS:
      return { ...initialState };

    case constants.AUTH_ERROR:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  onAuth: authReducer,
});
