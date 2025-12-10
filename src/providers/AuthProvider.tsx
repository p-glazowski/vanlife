import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext(undefined);

export { AuthContext };

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({});

  function handleLogin(creds) {
    setUser(creds);
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("This component needs AuthContext Provider!");

  return context;
}
