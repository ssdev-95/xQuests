import React from "react";

import { Modal, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { DoubleArrow } from "@material-ui/icons";

const useModal = makeStyles({
  modal: {
    height: "15rem",
    width: "15rem",
    borderRadius: "4px",
    zIndex: "600",
    margin: "auto",
    background: "rgba(0,0,0,0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    filter: "invert(.5) sepia(.1) saturate(50) hue-rotate(90deg)",
    height: "3.15rem",
    width: "3.15rem",
  },
  container: {
    outline: "none",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: 'relative'
  },
  input: {
    height: "6rem",
    width: "6rem",
    fontSize: "4rem",
    textAlign: "center",
  },
  submit: {
    zIndex: 800,
    background: "green",
    color: "white",
    position: 'absolute',
    top: '12rem'
  },
});

export const QuestModal = ({ isOpen }) => {
  const { modal, icon, container, input, submit } = useModal();

  return (
    <Modal open={isOpen} className={modal}>
      <div className={container}>
        <Button>
          <DoubleArrow
            className={icon}
            style={{ transform: "rotate(180deg)" }}
          />
        </Button>
        <input className={input} max="99" type="number" />
        <Button>
          <DoubleArrow className={icon} />
        </Button>
      <Button className={submit}>Init</Button>
      </div>
    </Modal>
  );
};
