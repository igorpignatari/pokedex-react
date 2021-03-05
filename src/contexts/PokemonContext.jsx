import { createContext, useState } from "react";
import { useFetch } from "../services/fetchData";

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const { pokemons, isLoading } = useFetch(url);
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };
  return (
    <PokemonContext.Provider
      value={{ pokemons, isLoading, filter, handleSearch }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
