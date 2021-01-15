import React, { memo } from "react";
import styles from "./content.module.css";

const Content = memo(({ content: { image, title, description } }) => {
  return (
    <li className={styles.content}>
      <img className={styles.image} src={image} alt="image" />
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
});

export default Content;
