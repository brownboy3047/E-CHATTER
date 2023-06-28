import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

interface User {
  // Define the user properties
  id: number;
  username: string;
}

interface AuthState {
  user: User | null;
  authIsReady: boolean;
}

interface AuthAction {
  type: string;
  payload?: any;
}

interface AuthContextValue extends AuthState {
  dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };

    default:
      return state;
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
