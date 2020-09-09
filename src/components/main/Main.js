import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import routes from "../../routes/routes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import LoaderComponent from "../loader/LoaderComponent";

function Main() {
  return (
    <>
      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          {routes.map((route) => {
            // console.log("route", route);
            return route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            );
          })}
          {/* <Route exact path="/" component={Home} />
          <Route path="/contacts" component={PhoneBook} />
          <Route path="/register" component={AuthForm} />
          <Route path="/login" component={AuthForm} /> */}
        </Switch>
      </Suspense>
    </>
  );
}

export default Main;
