/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export interface MenuInterface {
  menuName: string;
  // handleClick: () => void;
  setIsModalMenu: Dispatch<SetStateAction<boolean>>;
  // onSubmit: () => void;
  // valueOne: string;
  // valueTwo: string;
  // setValueOne: Dispatch<SetStateAction<string>>;
  // setValueTwo: Dispatch<SetStateAction<string>>;
  children: React.ReactNode;
}
