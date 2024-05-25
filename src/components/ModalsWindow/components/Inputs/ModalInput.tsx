/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { InputModal } from "./types/input.interfac";

export const ModalInput: React.FC<InputModal> = ({
  name,
  inputType,
  value,
  setValue,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNameClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="modal-window__input-wrapper">
      <div className="modal-window__input-name" onClick={handleNameClick}>
        {name} <span>*</span>
      </div>

      <div className="modal-window__input">
        <input
          type={inputType}
          value={value}
          ref={inputRef}
          onChange={(e: any) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
