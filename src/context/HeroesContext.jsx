import { createContext, useContext, useReducer } from "react";
import { heroesReducer } from "./heroesReducer";

const HeroesContext = createContext();

const initialState = { heroes: [], loading: false };

export const HeroesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(heroesReducer, initialState);

  return (
    <HeroesContext.Provider value={{ state, dispatch }}>
      {children}
    </HeroesContext.Provider>
  );
};

export const useHeroes = () => useContext(HeroesContext);
