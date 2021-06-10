import React from "react";

import { Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import useQuestions from "../../contexts/QuestionsContext";

const useQuestionStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
    padding: "1rem 0",
    overflowY: "scroll"
  },
  card: {
    height: "18rem",
    width: "36rem",
    maxWidth: "90%",
    margin: "1rem auto 0",
    padding: "3rem 2rem"
  },
  form: {
    height: "100%",
    width: "100%",
    display: "flex",
    marginTop: '.45rem',
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "stretch",
    gap: ".8rem"
  },
  option: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1rem"
  },
  heading: {
    fontWeight: 500,
    fontSize: "1.1rem"
  },
});

export const Question = () => {
  const { card, form, option, heading, container } = useQuestionStyles();

  const { questions } = useQuestions();

  return (
    <div className={container}>
      {questions.map((quest, index) => (
        <Card key={quest.question.split(" ").join("")} className={card}>
          <h3 className={heading}>{`${index+1}) ${quest.question}`}</h3>
          <form className={form}>{
            quest.answers.map((answer, index)=>(
              <label key={`${answer}${index+100*4}`} className={option} htmlFor={`option-${index}`}>
                <input
                  className={""}
                  type="radio"
                  value={answer}
                  name="option"
                  id={`option-${index}`}
                />
                {answer}
              </label>
            ))
          }</form>
        </Card>
      ))}
    </div>
  );
};
