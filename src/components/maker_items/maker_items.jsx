import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./maker_items.module.css";

const MakerItems = ({
  FileInput,
  fileUrl,
  fileName,
  card,
  defaultColor,
  createCard,
  onReset,
  onFileChange,
  onValueChange,
}) => {
  const path = useLocation().pathname;
  const formRef = React.useRef();
  const nameRef = React.useRef();
  const companyRef = React.useRef();
  const positionRef = React.useRef();
  const contactRef = React.useRef();
  const remarkRef = React.useRef();
  const colorRef = React.useRef();

  const onCardSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const company = companyRef.current.value;
    const position = positionRef.current.value;
    const contact = contactRef.current.value;
    const remark = remarkRef.current.value;
    const color = colorRef.current.value;

    const update = {
      id: card ? card.id : Date.now(),
      name,
      company,
      position,
      contact,
      remark,
      color,
      fileUrl,
      fileName,
    };

    name && createCard(update);

    path === "/makers" && onReset(formRef);
  };

  const onInputChange = (e) => {
    onValueChange(e.target.name, e.target.value);
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={onCardSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        autoComplete="off"
        autoCapitalize="off"
        ref={nameRef}
        onChange={onInputChange}
        defaultValue={card ? card.name : null}
        required
      />
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        placeholder="Company"
        autoComplete="off"
        autoCapitalize="off"
        ref={companyRef}
        onChange={onInputChange}
        defaultValue={card ? card.company : null}
      />
      <label htmlFor="position">Position</label>
      <input
        type="text"
        name="position"
        placeholder="Position"
        autoComplete="off"
        autoCapitalize="off"
        ref={positionRef}
        onChange={onInputChange}
        defaultValue={card ? card.position : null}
      />
      <label htmlFor="contact">Contact</label>
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        autoComplete="off"
        autoCapitalize="off"
        ref={contactRef}
        onChange={onInputChange}
        defaultValue={card ? card.contact : null}
      />
      <label htmlFor="remark">Remark</label>
      <textarea
        name="remark"
        placeholder="Remark"
        autoComplete="off"
        autoCapitalize="off"
        ref={remarkRef}
        maxLength="50"
        onChange={onInputChange}
        defaultValue={card ? card.remark : "Up to 50 characters"}
      ></textarea>
      <FileInput name={fileName} url={fileUrl} onFileChange={onFileChange} />

      <select
        name="color"
        ref={colorRef}
        onChange={onInputChange}
        defaultValue={card ? card.color : null}
      >
        <option value="">--Choose your color theme--</option>
        <option value="light">light</option>
        <option value="lilac">lilac</option>
        <option value="leaf">leaf</option>
        <option value="dark">dark</option>
      </select>

      <button
        type="button"
        onClick={() => onReset(formRef)}
        className={styles.button}
      >
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};
export default MakerItems;
