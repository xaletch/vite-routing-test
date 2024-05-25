/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export interface InputProps {
  name: string;
  inputType: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  passwordIcon?: string;
  grid?: string;
  require: boolean;
  error?: any;
}
