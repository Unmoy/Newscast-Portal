import React, { useContext, useEffect, createContext, useState } from "react";
import { authentication } from "../Authentication/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  function signUp(email, password) {
    return authentication.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return authentication.signInWithEmailAndPassword(email, password);
  }
  function signInWithGoogle() {
    return signInWithPopup(auth, provider);
  }
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, signUp, login, signInWithGoogle };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
