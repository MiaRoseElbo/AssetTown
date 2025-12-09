import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

console.log("🔥 React main.jsx loaded");

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
