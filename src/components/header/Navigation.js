import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { connect } from "react-redux";
import authActions from "../../redux/auth/authActions";

function Navigation({ isAuth, onLogout }) {
  return (
    <ul className={styles.listWrapper}>
      {/* <li className={styles.item}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Home
          </NavLink>
        </li> */}
      {isAuth && (
        <li className={styles.item}>
          <NavLink
            to="/contacts"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Contacts
          </NavLink>
        </li>
      )}
      <li className={styles.item}>
        {isAuth ? (
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                to="/login"
                className={styles.link}
                activeClassName={styles.linkActive}
                onClick={() => {
                  onLogout();
                }}
              >
                Log Out
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                to="/register"
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                Register
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/login"
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.onAuth.token,
  };
};

const mapDispathToState = {
  onLogout: authActions.logoutSuccess,
};

export default connect(mapStateToProps, mapDispathToState)(Navigation);
