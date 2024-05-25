/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dispatch, SetStateAction } from "react";

export interface InputModal {
  name: string;
  inputType: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
