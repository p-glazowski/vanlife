import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type Van } from "../types/types";
import { getVans } from "../API/Api";

interface VansProviderProps {
  children: ReactNode;
}

interface VansContextProps {
  vans: Van[];
  loading: boolean;
  error: string | null;
}

const VansContext = createContext<VansContextProps | undefined>(undefined);

export default function VansProvider({ children }: VansProviderProps) {
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        /* const res = await fetch(url);
        if (!res.ok) throw new Error("Cannot fetch the data");
        const data = await res.json(); */
        const data = await getVans();
        setVans(data);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <VansContext.Provider value={{ vans, loading, error }}>
      {children}
    </VansContext.Provider>
  );
}

export function useVans() {
  const context = useContext(VansContext);
  if (!context) throw new Error("useVans must be used within a VansProvider!");
  return context;
}
