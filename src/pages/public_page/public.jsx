import React from "react";
import Header from "../../components/header/header";
import Content from "./content";
import styles from "./public.module.css";

const Public = ({ isAuthenticated }) => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <h1 className={styles.title}>Be our member</h1>
        <p className={styles.description}>
          Create your own business cards collection on the web-site.
          <br />
          This will help you manage your partners much easier.
        </p>
        <ul className={styles.contents}>
          <Content />
        </ul>
      </section>
    </>
  );
};

export default Public;
