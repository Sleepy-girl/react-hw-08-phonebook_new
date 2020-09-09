import React, { Component } from "react";
import { connect } from "react-redux";
import { register, login } from "../../redux/operations/authOperations";
import styles from "../contactForm/contactForm.module.css";
import LoaderComponent from "../loader/LoaderComponent";
import ErrorComponent from "../error/ErrorComponent";

const initialState = {
  email: "",
  password: "",
};

class AuthForm extends Component {
  state = {
    ...initialState,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const URL = this.props.match.url;
    URL === "/register" && this.props.register(this.state);
    URL === "/login" && this.props.login(this.state);

    this.setState(initialState);
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        {this.props.loading ? (
          <LoaderComponent />
        ) : (
          <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <label className={styles.label}>
                Email:
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className={styles.input}
                />
              </label>
              <label className={styles.label}>
                Password:
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  className={styles.input}
                />
              </label>
              <button type="submit" className={styles.button}>
                {this.props.location.pathname === "/register"
                  ? "Register"
                  : "Sign In"}
              </button>
            </form>
          </div>
        )}
        {this.props.error && <ErrorComponent />}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.contacts.error,
    loading: state.contacts.loading,
  };
};

const mapDispatchToProps = {
  register,
  login,
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
