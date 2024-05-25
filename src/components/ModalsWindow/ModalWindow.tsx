import { ModalProps } from "./types/modal.interface";

import "./modal.css";

export const ModalWindow: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  setIsModalMenu,
}) => {
  return (
    <div className="modal-window" onClick={() => setIsModalMenu(false)}>
      {children}
    </div>
  );
};
