import React from "react";
import { Route, NavLink } from "react-router-dom";
import AuthForm from "../auth/AuthForm";
import PhoneBook from "../phoneBook/PhoneBook";

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
