import React from "react";
import { Link } from "react-router-dom";
import LoginPopup from "../../components/login_popup/login_popup";
import styles from "./home.module.css";

const Home = (props) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Welcome.</h1>
      <section className={styles.login}>
        <LoginPopup />
      </section>
      <Link to={"/cards"} replace>
        Browse the website
      </Link>
    </section>
  );
};

export default Home;
