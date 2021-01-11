import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import Database from "./service/database";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import "@fortawesome/fontawesome-free/js/all.js";

const authService = new AuthService();
const database = new Database();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService} database={database} />
  </React.StrictMode>,
  document.getElementById("root")
);
