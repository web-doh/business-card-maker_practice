import React from "react";
import styles from "./content.module.css";

const Content = (props) => {
  return (
    <li className={styles.content}>
      <img src="" alt="image" />
      <div className={styles.text}>
        <h3 className={styles.title}>Easily Manage</h3>
        <p className={styles.description}>
          You can make card, edit, find, share easily
        </p>
      </div>
    </li>
  );
};

export default Content;
