import React from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({
  name,
  url,
  defaultImage,
  imageUploader,
  onFileChange,
}) => {
  const fileRef = React.useRef();

  const onButtonClick = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  const onChange = async (e) => {
    const uploaded = await imageUploader.upload(e.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  const onDelete = () => {
    onFileChange({
      name: null,
      url: defaultImage,
    });
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="file"
        name="file"
        accept="image/*"
        ref={fileRef}
        onChange={onChange}
      />
      <div className={styles.file}>
        <button className={styles.button} onClick={onButtonClick}>
          {name || "No file"}
        </button>
        {name && (
          <span className={styles.icon} onClick={onDelete}>
            <i className="fas fa-minus"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageFileInput;
