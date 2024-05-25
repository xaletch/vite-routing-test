import { useState } from "react";

interface AuthContextType {
  isAuth: boolean;
  updateAuthStatus: () => void;
}

export const useAuth = (): AuthContextType => {
  const [isAuth, setIsAuth] = useState(!!document.cookie?.includes("token="));

  const updateAuthStatus = () => {
    setIsAuth(!!document.cookie?.includes("token="));
  };

  return { isAuth, updateAuthStatus };
};
