import constants from "./constantsTypes";

const registerRequest = () => ({
  type: constants.REGISTER_REQUEST,
});
const registerSuccess = (userData) => ({
  type: constants.REGISTER_SUCCESS,
  payload: { ...userData },
});
const registerError = (error) => ({
  type: constants.REGISTER_ERROR,
  payload: error,
});

const loginRequest = () => ({
  type: constants.LOGIN_REQUEST,
});
const loginSuccess = (userData) => ({
  type: constants.LOGIN_SUCCESS,
  payload: { ...userData },
});
const loginError = (error) => ({
  type: constants.LOGIN_ERROR,
  payload: error,
});

// const logoutRequest = () => ({
//   type: constants.LOGOUT_REQUEST,

// });
// const logoutSuccess = (token) => ({
//   type: constants.LOGOUT_SUCCESS,
//   payload: token,
// });
// const logoutError = (error) => ({
//   type: constants.LOGOUT_ERROR,
//   payload: error,
// });

// const getCurrentUserRequest = () => ({
//   type: constants.GET_CURRENT_USER_REQUEST,
// });
// const getCurrentUserSuccess = (token) => ({
//   type: constants.GET_CURRENT_USER_SUCCESS,
//   payload: token,
// });
// const getCurrentUserError = (token) => ({
//   type: constants.GET_CURRENT_USER_ERROR,
//   payload: token,
// });

export default {
  registerRequest,
  registerSuccess,
  registerError,

  loginRequest,
  loginSuccess,
  loginError,

  // logoutRequest,
  // logoutSuccess,
  // logoutError,

  // getCurrentUserRequest,
  // getCurrentUserSuccess,
  // getCurrentUserError,
};
