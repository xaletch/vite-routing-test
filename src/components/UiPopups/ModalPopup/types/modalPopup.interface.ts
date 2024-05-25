/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export interface ModalPopupProps {
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
  popupValue: string[];
  isOpen: boolean;
  handleClick: () => void;
  popupName?: string;
  grid?: string;
  errors?: any;
}
