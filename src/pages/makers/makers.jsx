import React, { useState } from "react";
import CardPreview from "../../components/card_preview/card_preview";
import Header from "../../components/header/header";
import MakerItems from "../../components/maker_items/maker_items";
import styles from "./makers.module.css";

const Makers = ({ FileInput, isAuthenticated, createCard, cards }) => {
  const [file, setFlie] = useState({ fileName: null, fileUrl: null });
  const [liveCard, setLiveCard] = useState({
    name: null,
    company: null,
    position: null,
    contact: null,
    remark: null,
    color: "light",
    fileUrl: file.fileUrl,
    fileName: file.fileName,
  });

  const onFileChange = (file) => {
    setFlie({ fileName: file.name, fileUrl: file.url });
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
    setFlie({ fileName: null, fileUrl: null });
  };
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <section className={styles.container}>
        <h1 className={styles.title}>Add your Partner</h1>

        <section className={styles.main}>
          <MakerItems
            FileInput={FileInput}
            cards={cards}
            file={file}
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
