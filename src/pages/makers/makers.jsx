import React, { useState } from "react";
import CardPreview from "../../components/card_preview/card_preview";
import MakerItems from "../../components/maker_items/maker_items";
import styles from "./makers.module.css";

const Makers = ({ FileInput, createCard, cards }) => {
  const defaultImage = "/images/default_profile.png";
  const defaultColor = "light";

  const [liveCard, setLiveCard] = useState({
    name: null,
    company: null,
    position: null,
    contact: null,
    remark: null,
    color: defaultColor,
    fileUrl: defaultImage,
    fileName: null,
  });

  const onFileChange = (file) => {
    setLiveCard((liveCard) => {
      const updated = { ...liveCard };
      updated["fileUrl"] = file.url || defaultImage;
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
      color: defaultColor,
      fileUrl: defaultImage,
      fileName: null,
    });
  };

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Add your Partner</h1>

        <section className={styles.main}>
          <MakerItems
            FileInput={FileInput}
            fileUrl={liveCard.fileUrl}
            fileName={liveCard.fileName}
            defaultColor={defaultColor}
            createCard={createCard}
            onReset={onReset}
            onFileChange={onFileChange}
            onValueChange={onValueChange}
          />
          <CardPreview liveCard={liveCard} />
        </section>
      </section>
    </>
  );
};

export default Makers;
