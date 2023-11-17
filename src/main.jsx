import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";

import { Provider } from "react-redux";
import { store } from "@/store";

import "@/index.css";

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
