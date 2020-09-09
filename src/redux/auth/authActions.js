import constants from "./constantsTypes";

const authRequest = () => ({
  type: constants.AUTH_REQUEST,
});
const authSuccess = (userData) => ({
  type: constants.AUTH_SUCCESS,
  payload: { ...userData },
});
const authError = (error) => ({
  type: constants.AUTH_ERROR,
  payload: error,
});

const logoutSuccess = (token) => ({
  type: constants.LOGOUT_SUCCESS,
  payload: token,
});

export default {
  authRequest,
  authSuccess,
  authError,

  logoutSuccess,
};
