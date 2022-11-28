import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

interface context {
  signUp: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logOut: () => void;
  currentUser?: User;
}

export const AuthContext = createContext<context>({
  signUp: async () => {},
  login: async () => {},
  logOut: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // return setCurrentUser();
    });
    return unsubscribe;
  });
}
