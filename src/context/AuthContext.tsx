import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "../hooks";
import { Credentials, User } from "../types";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string;
  login: (credentials: Credentials) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: "",
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = async (credentials: Credentials) => {
    setError(""); // clear the error from the last time
    setLoading(true);

    try {
      // fake login
      setTimeout(() => {
        // call the server here
        setUser({
          id: Date.now(),
          email: credentials.email,
        });
        setLoading(false);
        navigate("/admin");
      }, 2000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      // fake logout
      // call the server here
      setUser(null);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
