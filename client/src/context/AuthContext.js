import { useState, createContext, useContext } from "react";
import React from "react";

const AuthContext = createContext();

function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth can only be used within <AuthProvider/>");
  return context;
}

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const values = { user, setUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { useAuth };
export default AuthContextProvider;
