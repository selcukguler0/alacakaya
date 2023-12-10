import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { getData, removeData, storeData } from "../utils/data-storage";

export interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (userData: User) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await getData("user");
      setUser(user);
    };
    getUser();
  }, []);

  const signIn = async (userData: User) => {
    await storeData("user", userData);
    setUser(userData);
  };

  const signOut = async () => {
    await removeData("user");
    setUser(null);
  };

  const contextValue: AuthContextType = {
    user,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
