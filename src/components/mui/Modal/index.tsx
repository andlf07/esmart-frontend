"use client";
import { ModalProps, Modal as MuiModal } from "@mui/material";
import React from "react";
import { StyledModalContainer } from "./styles";

interface Props extends ModalProps {}

const Modal: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MuiModal {...props}>
      <StyledModalContainer>{children}</StyledModalContainer>
    </MuiModal>
  );
};

export default Modal;
