import React from "react";
import ReactDOM from "react-dom/client";
// packages
import "@popperjs/core";
import "jquery.easing";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import App from "./app";
// styles
import "./styles/resume.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
