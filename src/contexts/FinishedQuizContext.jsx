/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";

import useProfile from "./UserContext";

const FinishedQuizContext = createContext({});

export const FinishedQuizProvider = ({ children }) => {
  const { user, updateUser } = useProfile();
  const quests = JSON.parse(localStorage.getItem('questions'))

  const [isFinishedQuizModalOpen, setIsFinishedQuizModalOpen] = useState(false)
  const [points, setPoints] = useState(0);
  const [quizResult, setQuizResult] = useState([]);
  const [hasFinished, setHasFinished] = useState(false);

  const toggleFisnishedQuizModal = () => {
    setIsFinishedQuizModalOpen(!isFinishedQuizModalOpen)
  }

  const handleFinishedQuiz = (quizAnswers) => {
    let finalPoints = 0;

    quizAnswers.forEach((answer, index) => {
      const correctAnswer = quests[index].answers[quests[index].correct_answer];
      // console.log(correctAnswer)
      if (answer === correctAnswer) {
        finalPoints += 10;
      }
      setQuizResult([
        ...quizResult,
        {
          user_answer: answer,
          status: answer === correctAnswer ? "correct" : "incorrect",
        },
      ]);
    });

    setPoints(finalPoints);
    setHasFinished(true);
    toggleFisnishedQuizModal()
  };

  /*analyzed-quiz = {
      profile: User{},
			questions:  [
				{
					user-answer: string,
					status: string //either 'correct' or 'incorrect'
        }
      ]   
  }*/

  useEffect(() => {
		updateUser({
			...user,
			points: points
		})

    if(hasFinished) {
			localStorage.setItem("quiz", JSON.stringify({
				profile: user,
				questions: quizResult
			}));

			setHasFinished(false);
		}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasFinished]);

  return (
    <FinishedQuizContext.Provider
      value={{
        points,
        isFinishedQuizModalOpen,
        toggleFisnishedQuizModal,
        handleFinishedQuiz
      }}
    >
      {children}
    </FinishedQuizContext.Provider>
  );
};

export default function useFinishedQuiz() {
  return useContext(FinishedQuizContext);
}
