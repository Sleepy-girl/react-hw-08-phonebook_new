import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component: MyComponent, isAuth, ...rest }) {
  console.log("isAuth PrivateRoutes", isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? (
          <MyComponent {...props} />
        ) : (
          <Redirect to="/register" />
        );
      }}
    />
  );
}

const mapStateToProps = (state) => {
  console.log("state.auth.onLogin.token", state);

  return {
    isAuth: state.auth.onAuth.token,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
