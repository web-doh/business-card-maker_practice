import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardForm from "../../components/card_form/card_form";
import styles from "./card_edit.module.css";

const CardEdit = ({ FileInput, createCard }) => {
  const defaultImage = process.env.PUBLIC_URL + "/images/default_profile.png";
  const card = useLocation().state.card;
  const [liveCard, setLiveCard] = useState(card);

  const onFileChange = (file) => {
    setLiveCard(
      (liveCard) => {
        const updated = { ...liveCard };
        updated["fileUrl"] = file.url || defaultImage;
        updated["fileName"] = file.name || null;

        return updated;
      },
      [setLiveCard]
    );
  };

  const onValueChange = (name, value) => {
    setLiveCard(
      (liveCard) => {
        const updated = { ...liveCard };
        updated[name] = value;

        return updated;
      },
      [setLiveCard]
    );
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
      <CardForm
        FileInput={FileInput}
        card={liveCard}
        fileUrl={liveCard.fileUrl}
        fileName={liveCard.fileName}
        defaultImage={defaultImage}
        createCard={createCard}
        onReset={onReset}
        onFileChange={onFileChange}
        onValueChange={onValueChange}
      />
    </section>
  );
};

export default CardEdit;
