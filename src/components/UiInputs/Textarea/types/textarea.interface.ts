import { Dispatch, SetStateAction } from "react";

export interface TextareaInterface {
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
