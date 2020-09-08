import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsReducer";
import thunk from "redux-thunk";
import authReducers from "./auth/authReducers";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducers,
});

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
