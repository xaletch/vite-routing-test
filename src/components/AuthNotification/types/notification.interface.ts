import { Dispatch, SetStateAction } from "react";

export interface NotificationAuthProps {
  message: string;
  close: Dispatch<SetStateAction<boolean>>;
}
