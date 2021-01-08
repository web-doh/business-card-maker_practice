import React from "react";
import CardPreview from "../../components/card_preview/card_preview";
import Header from "../../components/header/header";
import MakerItems from "../../components/maker_items/maker_items";
import styles from "./makers.module.css";

const Makers = ({ isAuthenticated, FileInput }) => {
  const formRef = React.useRef();
  const imageRef = React.useRef();
  const colorRef = React.useRef();

  const inputItems = [
    { id: 1, type: "text", name: "name" },
    { id: 2, type: "text", name: "company" },
    { id: 3, type: "text", name: "position" },
    { id: 4, type: "text", name: "contact" },
    { id: 5, type: "file", name: "image file" },
    { id: 6, type: "select", name: "color theme" },
  ];

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <section className={styles.container}>
        <h1 className={styles.title}>Add your Partner</h1>

        <section className={styles.main}>
          <form ref={formRef} className={styles.form}>
            <MakerItems FileInput={FileInput} inputItems={inputItems} />

            <button type="button" className={styles.button}>
              Reset
            </button>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>

          <CardPreview />
        </section>
      </section>
    </>
  );
};

export default Makers;
