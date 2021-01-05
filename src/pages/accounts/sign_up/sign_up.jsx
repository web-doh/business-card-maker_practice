import React, { useRef } from "react";
import Header from "../../../components/header/header";
import styles from "./sign_up.module.css";

const SignUp = ({ authService, currentUser, onSignUp }) => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const password2Ref = React.useRef();
  const nameRef = React.useRef();

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const password2 = password2Ref.current.value;
    const displayName = nameRef.current.value;

    email && password === password2 && displayName && onSignUp(email, password);
  };

  return (
    <>
      <Header authService={authService} currentUser={currentUser} />

      <section className={styles.container}>
        <h1 className={styles.title}>Sign up</h1>

        <form className={styles.form} onSubmit={handleSignUp}>
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
            <li className={styles.item}>
              <label htmlFor="password2">Password check</label>
              <input
                type="Password"
                name="password2"
                placeholder="Password check"
                autoComplete="off"
                ref={password2Ref}
                required
              />
            </li>
            <li className={styles.item}>
              <label htmlFor="username">Name</label>
              <input
                type="text"
                name="username"
                placeholder="Name"
                autoComplete="off"
                ref={nameRef}
                autoCapitalize="off"
                required
              />
            </li>
          </ul>
          <button type="submit" className={styles.button}>
            Sign up
          </button>
        </form>
      </section>
    </>
  );
};

export default SignUp;
