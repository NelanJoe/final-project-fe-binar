import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "@/App.jsx";

import { Provider } from "react-redux";
import { store } from "@/stores";

import "@/index.css";
import "@fontsource/poppins";

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);
root.render(
  <HelmetProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HelmetProvider>
);
