import React from "react";
import Header from "../../components/header/header";
import LoginPopup from "../../components/login_popup/login_popup";
import styles from "./accounts.module.css";

const Accounts = ({ isAuthenticated, currentUser, onLogout, authService }) => {
  let username;
  if (currentUser) {
    username = currentUser.displayName || currentUser.email.split("@")[0];
  }

  const handleLogout = () => {
    currentUser && onLogout();
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <section className={styles.container}>
        {isAuthenticated ? (
          <>
            <h1 className={styles.title}>Hello, {username}!</h1>
            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
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
