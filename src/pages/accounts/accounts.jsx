import React from "react";
import Header from "../../components/header/header";
import LoginPopup from "../../components/login_popup/login_popup";
import styles from "./accounts.module.css";

const Accounts = ({ authService, currentUser }) => {
  let username;
  if (currentUser) {
    username = currentUser.displayName || currentUser.email.split("@")[0];
  }

  return (
    <>
      <Header authService={authService} currentUser={currentUser} />
      <section className={styles.container}>
        {currentUser ? (
          <>
            <h1 className={styles.title}>Hello, {username}!</h1>
            <button onClick={authService.signOut}>Logout</button>
          </>
        ) : (
          <>
            <h1 className={styles.title}>Login</h1>
            <LoginPopup authService={authService} />
          </>
        )}
      </section>
    </>
  );
};

export default Accounts;
