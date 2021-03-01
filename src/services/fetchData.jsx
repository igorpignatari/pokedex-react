import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data.results);
      await fetchPokemon(data);
    };
    fetchData();
  }, [url]);

  const fetchPokemon = async (data) => {
    const _pokemons = await Promise.all(
      data.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
    );
    setPokemons(_pokemons);
  };

  return { pokemons };
};
