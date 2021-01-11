import React from "react";
import CardPreview from "../../components/card_preview/card_preview";
import Header from "../../components/header/header";
import MakerItems from "../../components/maker_items/maker_items";
import styles from "./makers.module.css";

const Makers = ({ FileInput, isAuthenticated, createCard, cards }) => {
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <section className={styles.container}>
        <h1 className={styles.title}>Add your Partner</h1>

        <section className={styles.main}>
          <MakerItems
            cards={cards}
            FileInput={FileInput}
            createCard={createCard}
          />
          <CardPreview />
        </section>
      </section>
    </>
  );
};

export default Makers;
