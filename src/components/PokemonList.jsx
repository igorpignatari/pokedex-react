import React, { useState } from "react";
import { useFetch } from "../services/fetchData";
import { Card } from "./Card";

export const PokemonList = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=151");
  const { pokemons } = useFetch(url);

  const List = pokemons.map((pokemon) => (
    <li key={pokemon.id}>
      <Card pokemon={pokemon} />
    </li>
  ));
  return (
    <div className="main_container">
      <div className="buttons_container">
        <button
          type="button"
          onClick={() => {
            setUrl("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
          }}
        >
          First Generation
        </button>
        <button
          type="button"
          onClick={() => {
            setUrl("https://pokeapi.co/api/v2/pokemon?limit=99&offset=152");
          }}
        >
          Second Generation
        </button>
        <button
          type="button"
          onClick={() => {
            setUrl("https://pokeapi.co/api/v2/pokemon?limit=135&offset=251");
          }}
        >
          Third Generation
        </button>
      </div>
      <div className="pokemon_list">
        <ul>{List}</ul>
      </div>
    </div>
  );
};
