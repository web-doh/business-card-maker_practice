import React from "react";
import MakerItems from "../maker_items/maker_items";
import CardPreview from "../card_preview/card_preview";
import styles from "./card_form.module.css";

const CardForm = ({
  FileInput,
  fileUrl,
  fileName,
  card,
  liveCard,
  defaultColor,
  defaultImage,
  createCard,
  onReset,
  onFileChange,
  onValueChange,
}) => {
  return (
    <section className={styles.main}>
      <MakerItems
        FileInput={FileInput}
        card={card ? card : null}
        fileUrl={fileUrl}
        fileName={fileName}
        defaultImage={defaultImage}
        createCard={createCard}
        onReset={onReset}
        onFileChange={onFileChange}
        onValueChange={onValueChange}
      />

      <div className={styles.icon}>
        <i className="fas fa-angle-double-right"></i>
      </div>

      <CardPreview liveCard={card ? card : liveCard} />
    </section>
  );
};

export default CardForm;
