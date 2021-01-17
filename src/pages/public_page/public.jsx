import React, { memo } from "react";
import Content from "./content";
import styles from "./public.module.css";

const Public = memo(() => {
  const contents = [
    {
      id: "content1",
      image: "/images/edit.png",
      title: "Easily Manage",
      description: "You can make card, edit, find, share easily",
    },
    {
      id: "content2",
      image: "/images/maker.png",
      title: "No risk of loss",
      description: "You don't need to worry about losing your cards",
    },
    {
      id: "content3",
      image: "/images/sample.png",
      title: "Various color themes",
      description: "You can choose from 3 color themes - 'light, dark, yellow'",
    },
  ];

  return (
    <>
      <section>
        <h1>Be our member</h1>
        <p className={styles.description}>
          Create your own business cards collection on the web-site.
          <br />
          This will help you manage your partners much easier.
        </p>
        <ul className={styles.contents}>
          {contents.map((content) => (
            <Content key={content.id} content={content} />
          ))}
        </ul>
      </section>
    </>
  );
});

export default Public;
