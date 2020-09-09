import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("../pages/Home")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("../components/auth/AuthForm")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("../components/auth/AuthForm")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("../components/phoneBook/PhoneBook")),
    private: true,
    restricted: false,
  },
  // {
  //   path: "/logout",
  //   label: "Log Out",
  //   exact: true,
  //   // component: lazy(() => import("../components/auth/AuthForm")),
  //   private: true,
  //   restricted: false,
  // },
];
