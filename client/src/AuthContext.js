import React, { useEffect, useState } from "react";
import AuthApp from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    AuthApp.auth().onAuthStateChanged((user) => {
      console.log(user)
      setCurrentUser(user)
      setPending(false)
    
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

