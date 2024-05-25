import React from "react";
import { ButtonProps } from "./types/button.interface";

export const ModalButton: React.FC<ButtonProps> = ({
  name,
  color,
  textColor,
  handleClick,
  onSubmit,
}) => {
  return (
    <button
      className="modal-window__menu-button"
      style={{ background: `${color}`, color: `${textColor}` }}
      onClick={() => {
        handleClick();
        onSubmit && onSubmit();
      }}
    >
      {name}
    </button>
  );
};
