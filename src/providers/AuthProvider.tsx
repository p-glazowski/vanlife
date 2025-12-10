import { onAuthStateChanged, type User } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { auth } from "../API/Api";

interface AuthProviderProps {
  children: ReactNode;
}

interface ContextProps {
  loggedUser: User | null;
  loading: boolean;
}

const AuthContext = createContext<ContextProps | undefined>(undefined);

export { AuthContext };

export default function AuthProvider({ children }: AuthProviderProps) {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("Running useEffect!");
    const authStateChange = onAuthStateChanged(auth, (user) => {
      setLoggedUser(user);
      setLoading(false);
    });

    return () => authStateChange();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("This component needs AuthContext Provider!");

  return context;
}
