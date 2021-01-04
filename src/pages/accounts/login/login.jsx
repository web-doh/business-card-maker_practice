import React from "react";
import styles from "./login.module.css";

const Login = ({ onLogin }) => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    email && password && onLogin(email, password);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Login</h1>

      <form className={styles.form} onSubmit={handleLogin}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              autoCapitalize="off"
              ref={emailRef}
              required
            />
          </li>
          <li className={styles.item}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password (At least 6 characters including letters & numbers)"
              minLength="6"
              autoComplete="off"
              ref={passwordRef}
              required
            />
          </li>
        </ul>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
