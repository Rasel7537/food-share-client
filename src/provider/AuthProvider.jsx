import React, { createContext, useEffect, useState } from "react";
export const authContext = createContext();
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log( loading, user);


  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

const updateUser = (updatedData)=>{
  return updateProfile(auth.currentUser , updatedData );
}


  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser, 
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser
  };

  return (
    <authContext.Provider value={authData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
