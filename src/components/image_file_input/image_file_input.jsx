import React from "react";

const ImageFileInput = ({ inputItem }) => {
  const inputRef = React.useRef();

  return (
    <input
      type={inputItem.type}
      name={inputItem.name}
      accept="image/*"
      ref={inputRef}
    />
  );
};

export default ImageFileInput;
