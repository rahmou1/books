import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/book";
const le = document.getElementById("root");
const root = ReactDOM.createRoot(le);

root.render(
  <Provider>
    <App />
  </Provider>
);
