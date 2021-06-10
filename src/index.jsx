import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

import { ModalProvider } from "./contexts/ModalContext";
import { QuestionsProvider } from "./contexts/QuestionsContext";

import "./styles/globals.css";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <QuestionsProvider>
        <App />
      </QuestionsProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
