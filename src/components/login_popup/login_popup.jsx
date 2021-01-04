import React from "react";
import styles from "./login_popup.module.css";
import { Link } from "react-router-dom";

const LoginPopup = ({ authService }) => {
  const onLoginWith = (event) => {
    authService.loginWith(event.target.id);
  };

  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <Link className={styles.button} to="accounts/login">
          Login
        </Link>
      </li>
      <li className={styles.item}>
        <button className={styles.button} id="Google" onClick={onLoginWith}>
          Login with Google
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.button} id="Github" onClick={onLoginWith}>
          Login with Github
        </button>
      </li>
      <li className={`${styles.item} ${styles.sign_up}`}>
        <Link className={styles.button} to="accounts/sign-up">
          Sign up
        </Link>
      </li>
    </ul>
  );
};

export default LoginPopup;

// <input
// placeholder="아이디"
// autocapitalize="off"
// autocorrect="off"
// name="username"
// type="text"
// />
// <input
// placeholder="아이디"
// autocapitalize="off"
// autocorrect="off"
// minLength="6"
// name="password"
// type="password"
// />
