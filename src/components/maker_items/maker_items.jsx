import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./maker_items.module.css";

const MakerItems = ({
  FileInput,
  fileUrl,
  fileName,
  card,
  defaultColor,
  defaultImage,
  createCard,
  onReset,
  onFileChange,
  onValueChange,
}) => {
  const history = useHistory();
  const path = useLocation().pathname;
  const formRef = React.useRef();
  const nameRef = React.useRef();
  const companyRef = React.useRef();
  const positionRef = React.useRef();
  const contactRef = React.useRef();
  const remarkRef = React.useRef();
  const colorRef = React.useRef();
  const buttonClass = path === "/makers" ? styles.makersBtn : "";

  const onCardSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value || null;
    const company = companyRef.current.value || null;
    const position = positionRef.current.value || null;
    const contact = contactRef.current.value || null;
    const remark = remarkRef.current.value || null;
    const color = colorRef.current.value || null;
    const id = (card && card.id) || Date.now();

    const update = {
      id,
      name,
      company,
      position,
      contact,
      remark,
      color,
      fileUrl,
      fileName: fileName || null,
    };

    createCard(update);

    path === "/makers" && onReset(formRef);
    path.includes("/card/edit") && onRedirect();
  };

  const onRedirect = () => {
    history.push("/cards");
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
        className={styles.remark}
        name="remark"
        placeholder="Up to 75 characters"
        autoComplete="off"
        autoCapitalize="off"
        ref={remarkRef}
        maxLength="75"
        onChange={onInputChange}
        defaultValue={card && card.remark}
      ></textarea>

      <div className={styles.style}>
        <FileInput
          name={fileName}
          url={fileUrl}
          defaultImage={defaultImage}
          onFileChange={onFileChange}
        />

        <select
          className={styles.color}
          name="color"
          ref={colorRef}
          onChange={onInputChange}
          defaultValue={card ? card.color : null}
        >
          <option value="">--Choose your color theme--</option>
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="yellow">yellow</option>
        </select>
      </div>
      <div className={`${styles.buttons} ${buttonClass}`}>
        {path === "/makers" && (
          <button
            type="button"
            onClick={() => onReset(formRef)}
            className={styles.button}
          >
            Reset
          </button>
        )}
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default MakerItems;
