import { combineReducers } from "redux";
import constants from "./constantsTypes";

const initialState = {
  // name: "",
  email: "",
  token: "",
};

const registerReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case constants.REGISTER_REQUEST:
      return { ...state };

    case constants.REGISTER_SUCCESS:
      return { ...state, ...payload };

    case constants.REGISTER_ERROR:
      return payload;

    default:
      return state;
  }
};

const loginReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case constants.LOGIN_REQUEST:
      return { ...state };

    case constants.LOGIN_SUCCESS:
      return { ...state, ...payload };

    case constants.LOGIN_ERROR:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  onRegister: registerReducer,
  onLogin: loginReducer,
});
