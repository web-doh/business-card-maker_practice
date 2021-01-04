import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import "@fortawesome/fontawesome-free/js/all.js";

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
