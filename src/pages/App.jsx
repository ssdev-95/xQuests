import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { makeStyles } from "@material-ui/core/styles";

import { FinishedQuizModal } from '../components/FinishQuizModal'
import { SelectQuestModal } from "../components/QuestSelectModal";
import { Header } from "../components/Header";
import { Question } from "../components/Question";

import useModal from "../contexts/SelectQuestModalContext";
import useFinishedQuiz  from "../contexts/FinishedQuizContext"

const useHome = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    background: "#f0f2f5",
  },
  finishBtn: {
    height: '3.85rem',
    borderWidth: 0,
    borderRadius: '50px',
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    bottom: '2.5rem',
    right: '2.5rem'
  },
  icon: {
    fontSize: '3rem',
    filter: 'invert(.5) sepia(.1) saturate(50) hue-rotate(90deg)'
  }
});

function App() {
  const { container, finishBtn, icon } = useHome();

  const { isModalOpen, toggleModal } = useModal();
  const { toggleFisnishedQuizModal } = useFinishedQuiz();

  const [results, setResults] = useState([]);

  return (
    <div className={container}>
      <Header func={toggleModal} />
      <Question answers={results} func={setResults} />
      <SelectQuestModal isOpen={isModalOpen} />
      <FinishedQuizModal quiz={results} />
      <Button
         onClick={toggleFisnishedQuizModal}
         className={finishBtn}
      ><VerifiedUserIcon className={icon} />
      </Button>
    </div>
  );
}

export default App;
