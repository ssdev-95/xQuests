import React from "react";

import { Modal, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { DoubleArrow } from "@material-ui/icons";

const useModal = makeStyles({
  modal: {
    height: "15rem",
    width: "15rem",
    borderRadius: "4px",
    zIndex: "999",
    margin: "auto",
    background: "#f0f2f5",
    display: "flex",
  },
  icon: {
      background: 'green'
  }
});

export const QuestModal = ({ isOpen }) => {
  const { modal, icon } = useModal();

  return (
    <Modal open={isOpen} className={modal}>
      <div>
        <Button>
          <DoubleArrow className={icon} />
        </Button>
        <input type="number" />
        <Button>
          <DoubleArrow className={icon} />
        </Button>
      </div>
    </Modal>
  );
};
