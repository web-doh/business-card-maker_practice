import React from "react";
import styles from "./maker_items.module.css";

const MakerItems = ({
  FileInput,
  file,
  cards,
  createCard,
  onReset,
  onFileChange,
  onValueChange,
}) => {
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
    const fileUrl = file.fileUrl;
    const fileName = file.fileName;

    const card = {
      id: Date.now(),
      name,
      company,
      position,
      contact,
      remark,
      color,
      fileUrl,
      fileName,
    };

    name && createCard(card);

    onReset();
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
      />
      <label htmlFor="remark">Remark</label>
      <textarea
        name="remark"
        placeholder="Remark"
        autoComplete="off"
        autoCapitalize="off"
        ref={remarkRef}
        onChange={onInputChange}
      />
      <FileInput name={file.fileName} onFileChange={onFileChange} />

      <select name="color" ref={colorRef} onChange={onInputChange}>
        <option value="">--Choose your color theme--</option>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
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
