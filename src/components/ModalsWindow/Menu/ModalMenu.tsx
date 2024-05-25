import React from "react";
// import { ModalButton } from "../components/Buttons/ModalButton";
// import { ModalInput } from "../components/Inputs/ModalInput";
import { MenuInterface } from "./types/menu.interface";
import { link_icon } from "../../../app/icons";
import { Button } from "../../Buttons/UIButtons/Button";
import { Textarea } from "../../UiInputs/Textarea/Textarea";
import { Input } from "../../UiInputs/Input/Input";
import { ModalPopup } from "../../UiPopups/ModalPopup/ModalPopup";

export const ModalMenu: React.FC<MenuInterface> = ({
  menuName,
  setIsModalMenu,
  children,
}) => {
  const inputs: JSX.Element[] = [];
  const buttons: JSX.Element[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (
        child.type === Input ||
        child.type === Textarea ||
        child.type === ModalPopup
      ) {
        inputs.push(child);
      } else if (child.type === Button) {
        buttons.push(child);
      }
    }
  });

  return (
    <div className="modal-window__menu" onClick={(e) => e.stopPropagation()}>
      <button
        className="modal-window__menu-button-close"
        onClick={() => setIsModalMenu(false)}
      >
        <img src={link_icon.close_menu} alt="закрыть" />
      </button>
      <div className="modal-window__menu-inner">
        <div className="modal-window__menu-head">
          <div className="modal-window__menu-head-name">{menuName}</div>
        </div>
        <div className="modal-window__menu-content">{inputs}</div>
        <div className="modal-window__menu-buttons">{buttons}</div>
      </div>
    </div>
  );
};
