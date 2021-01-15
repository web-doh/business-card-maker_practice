import React, { memo } from "react";
import Header from "../../components/header/header";
import Content from "./content";
import styles from "./public.module.css";

const Public = memo(() => {
  const contents = [
    {
      image: "/images/edit.png",
      title: "Easily Manage",
      description: "You can make card, edit, find, share easily",
    },
    {
      image: "/images/maker.png",
      title: "No risk of loss",
      description: "You don't need to worry about losing your cards",
    },
    {
      image: "/images/sample.png",
      title: "Unified Design",
      description: "You can choose from 3 color themes - 'light, dark, yellow'",
    },
  ];

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Be our member</h1>
        <p className={styles.description}>
          Create your own business cards collection on the web-site.
          <br />
          This will help you manage your partners much easier.
        </p>
        <ul className={styles.contents}>
          {contents.map((content) => (
            <Content content={content} />
          ))}
        </ul>
      </section>
    </>
  );
});

export default Public;
