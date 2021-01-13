import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardPreview from "../../components/card_preview/card_preview";
import MakerItems from "../../components/maker_items/maker_items";
import styles from "./card_edit.module.css";

const CardEdit = ({ FileInput, createCard }) => {
  const defaultImage = "/images/default_profile.png";
  const card = useLocation().state.card;
  const [liveCard, setLiveCard] = useState(card);

  const onFileChange = (file) => {
    setLiveCard((liveCard) => {
      const updated = { ...liveCard };
      updated["fileUrl"] = file.url;
      updated["fileName"] = file.name;

      return updated;
    });
  };

  const onValueChange = (name, value) => {
    setLiveCard((liveCard) => {
      const updated = { ...liveCard };
      updated[name] = value;

      return updated;
    });
  };

  const onReset = (formRef) => {
    formRef.current.reset();
    setLiveCard({
      name: null,
      company: null,
      position: null,
      contact: null,
      remark: null,
      color: "light",
      fileUrl: defaultImage,
      fileName: null,
    });
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Edit the Card</h1>

      <section className={styles.main}>
        <MakerItems
          FileInput={FileInput}
          card={liveCard}
          fileUrl={liveCard.fileUrl}
          fileName={liveCard.fileName}
          createCard={createCard}
          onReset={onReset}
          onFileChange={onFileChange}
          onValueChange={onValueChange}
        />
        <CardPreview liveCard={liveCard} />
      </section>
    </section>
  );
};

export default CardEdit;
