import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "../auth/AuthForm";
import Home from "../../pages/Home";
import PhoneBook from "../phoneBook/PhoneBook";
import Loader from "react-loader-spinner";
import routes from "../../routes/routes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

function Main() {
  return (
    <div>
      <Suspense fallback={Loader}>
        <Switch>
          {routes.map((route) =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            )
          )}
          {/* <Route exact path="/" component={Home} />
          <Route path="/contacts" component={PhoneBook} />
          <Route path="/register" component={AuthForm} />
          <Route path="/login" component={AuthForm} /> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default Main;
