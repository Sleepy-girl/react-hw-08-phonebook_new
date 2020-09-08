import axios from "axios";
import authActions from "../auth/authActions";
import contactsActions from "../contacts/contactsActions";

// axios.defaults.baseURL = "https://hw-07-async-redux.firebaseio.com/";

const API_KEY = "AIzaSyAm1AbNA6O3GBqm2K94jXDl4Z0wza66yV0";

const methods = {
  signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
  signIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
};

export const register = (userData) => (dispatch) => {
  dispatch(contactsActions.loaderOn());
  dispatch(authActions.registerRequest());
  axios
    .post(methods.signUp, userData)
    .then((response) =>
      dispatch(
        authActions.registerSuccess({
          token: response.data.idToken,
          email: response.data.email,
        })
      )
    )
    .catch((error) => dispatch(authActions.registerError(error)))
    .finally(() => dispatch(contactsActions.loaderOff()));
};

export const login = (userData) => (dispatch) => {
  dispatch(contactsActions.loaderOn());
  dispatch(authActions.loginRequest());
  axios
    .post(methods.signIn, userData)
    .then((response) =>
      dispatch(
        authActions.loginSuccess({
          token: response.data.idToken,
          email: response.data.email,
        })
      )
    )
    .catch((error) => dispatch(authActions.loginError(error)))
    .finally(() => dispatch(contactsActions.loaderOff()));
};
