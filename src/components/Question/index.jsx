import React from "react";

import { Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useQuestion = makeStyles({
  container: {
      height: '100%',
      width: '100%',
      padding: '2rem 0',
      overflowY: 'scroll',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem'
  },
  card: {
    height: "18rem",
    width: "36rem",
    maxWidth: '90%',
    padding: "5rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    h3: {
      color: "red",
    },
  },
  form: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  option: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  label: {
    cursor: "pointer",
  },
});

export const Question = () => {
  const { card, form, option, label, container } = useQuestion();

  return (
    <div className={container}>
      <Card className={card}>
        <h3>{"1) How many hours takes a Day?"}</h3>
        <form className={form}>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="36"
              name="option"
              id="option-one"
            />
            <label className={label} htmlFor="option-one">
              36 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="24"
              name="option"
              id="option-two"
            />
            <label className={label} htmlFor="option-two">
              24 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="12"
              name="option"
              id="option-three"
            />
            <label className={label} htmlFor="option-three">
              12 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="48"
              name="option"
              id="option-four"
            />
            <label className={label} htmlFor="option-four">
              48 hours
            </label>
          </div>
        </form>
      </Card>

      <Card className={card}>
        <h3>{"2) How many hours takes a Day?"}</h3>
        <form className={form}>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="36"
              name="option"
              id="option-one"
            />
            <label className={label} htmlFor="option-one">
              36 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="24"
              name="option"
              id="option-two"
            />
            <label className={label} htmlFor="option-two">
              24 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="12"
              name="option"
              id="option-three"
            />
            <label className={label} htmlFor="option-three">
              12 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="48"
              name="option"
              id="option-four"
            />
            <label className={label} htmlFor="option-four">
              48 hours
            </label>
          </div>
        </form>
      </Card>

      <Card className={card}>
        <h3>{"1) How many hours takes a Day?"}</h3>
        <form className={form}>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="36"
              name="option"
              id="option-one"
            />
            <label className={label} htmlFor="option-one">
              36 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="24"
              name="option"
              id="option-two"
            />
            <label className={label} htmlFor="option-two">
              24 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="12"
              name="option"
              id="option-three"
            />
            <label className={label} htmlFor="option-three">
              12 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="48"
              name="option"
              id="option-four"
            />
            <label className={label} htmlFor="option-four">
              48 hours
            </label>
          </div>
        </form>
      </Card>

      <Card className={card}>
        <h3>{"2) How many hours takes a Day?"}</h3>
        <form className={form}>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="36"
              name="option"
              id="option-one"
            />
            <label className={label} htmlFor="option-one">
              36 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="24"
              name="option"
              id="option-two"
            />
            <label className={label} htmlFor="option-two">
              24 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="12"
              name="option"
              id="option-three"
            />
            <label className={label} htmlFor="option-three">
              12 hours
            </label>
          </div>
          <div className={option}>
            <input
              className={label}
              type="radio"
              value="48"
              name="option"
              id="option-four"
            />
            <label className={label} htmlFor="option-four">
              48 hours
            </label>
          </div>
        </form>
      </Card>
    
    </div>
  );
};
