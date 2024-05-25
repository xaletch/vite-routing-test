import { ReactNode } from "react";

export interface FormBlockProps {
  title: string;
  styleClass?: string;
  children: ReactNode;
  hasCheckbox?: boolean;
  checkboxState?: boolean;
  onCheckboxChange?: () => void;
}
