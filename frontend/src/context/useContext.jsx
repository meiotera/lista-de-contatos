import { createContext } from "react";
import useAuthentic from "../hooks/useAuthetic";

const Context = createContext();

// temos que adicionar esse contexto na noss aaplicação
function UserProvider({ children }) {
  const { authenticated, login } = useAuthentic();

  return (
    <Context.Provider value={{ authenticated, login }}>
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };
