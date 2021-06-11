import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

import { SelectQuestModalProvider } from "./contexts/SelectQuestModalContext";
import { FinishedQuizProvider } from "./contexts/FinishedQuizContext";
import { QuestionsProvider } from "./contexts/QuestionsContext";
import { UserProvider } from "./contexts/UserContext";

import "./styles/globals.css";

ReactDOM.render(
  <React.StrictMode>
    <SelectQuestModalProvider>
      <QuestionsProvider>
        <UserProvider>
          <FinishedQuizProvider>
            <App />
          </FinishedQuizProvider>
        </UserProvider>
      </QuestionsProvider>
    </SelectQuestModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
