import { createContext } from "react";
import { useFetch } from "../services/fetchData";

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=30";
  const { pokemons } = useFetch(url);

  return (
    <PokemonContext.Provider value={{ pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};
