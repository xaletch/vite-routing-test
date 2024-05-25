import { AuthorizationFormProps } from "./types/authorizationForm.interface";

import "./authorizationForm.css";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { AuthNotification } from "../AuthNotification/AuthNotification";

export const AuthorizationForm: React.FC<AuthorizationFormProps> = ({
  children,
  isNotification,
  close,
  message,
}) => {
  const isAuth = useAuth().isAuth;

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="authorization">
      {isNotification && message && close && (
        <AuthNotification message={message} close={close} />
      )}
      <div className="authorization__wrapper">
        <form className="authorization__form">
          <div className="authorization__form-inner">{children}</div>
        </form>
      </div>
    </div>
  );
};
