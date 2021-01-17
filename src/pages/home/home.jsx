import React from "react";
import { Link } from "react-router-dom";
import LoginPopup from "../../components/login_popup/login_popup";
import styles from "./home.module.css";

const Home = ({ currentUser }) => {
  let username;
  if (currentUser) {
    username = currentUser.displayName || currentUser.email.split("@")[0];
  }

  return (
    <section className={styles.container}>
      {currentUser ? (
        <>
          <h1 className={styles.title}>Welcome back, {username}.</h1>
          <div className={styles.link}>
            <Link to="/cards" replace>
              Enter
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1 className={styles.title}>Welcome.</h1>
          <section className={styles.login}>
            <LoginPopup />
          </section>
          <div className={styles.link}>
            <Link to="/public" replace>
              Browse the website
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
