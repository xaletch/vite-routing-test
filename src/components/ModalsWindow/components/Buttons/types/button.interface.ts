/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps {
  name: string;
  color: string;
  textColor: string;
  handleClick: () => void;
  onSubmit?: () => void;
}
