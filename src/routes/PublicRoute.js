import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PublicRoute({ component: MyComponent, isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? <Redirect to="/" /> : <MyComponent {...props} />;
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.token,
});

export default connect(mapStateToProps)(PublicRoute);
