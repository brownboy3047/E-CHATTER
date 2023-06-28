import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//firebase imports
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useAuthContext();

  const logout = () => {
    setError(null);

    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, logout };
};
