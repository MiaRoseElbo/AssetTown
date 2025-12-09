import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

console.log("🔥 React main.jsx loaded");

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/AssetTown">
    <App />
  </BrowserRouter>
);
