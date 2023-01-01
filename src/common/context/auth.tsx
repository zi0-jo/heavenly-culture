import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface AuthProps {
  authorized: boolean;
  setAuthorized: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthProps | null>(null);

export default function AuthProvider({ children }: PropsWithChildren<{}>) {
  const [authorized, setAuthorized] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ authorized, setAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const { authorized, setAuthorized } = useContext(AuthContext) ?? {};

  const authorize = (code: string) => {
    if (code === process.env.REACT_APP_ACCESS_CODE) {
      setAuthorized?.(true);
      return true;
    }

    return false;
  };

  return {
    authorize,
    authorized,
  };
};
