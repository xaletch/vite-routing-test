import { Dispatch, ReactNode, SetStateAction } from "react";

export interface AuthorizationFormProps {
  children: ReactNode;
  isNotification?: boolean;
  close?: Dispatch<SetStateAction<boolean>>;
  message?: string;
}
