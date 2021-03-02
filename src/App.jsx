import { NavBar } from "./components/NavBar.jsx";
import { Content } from "./components/Content.jsx";
import { Card } from "./components/Card";
import { useState } from "react";
import { useFetch } from "./services/fetchData";

import "./style/global.css";

const App = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=30");
  const { pokemons } = useFetch(url);
  const list = pokemons.map((pokemon) => (
    <div key={pokemon.id}>
      <Card pokemon={pokemon} />
    </div>
  ));

  return (
    <div>
      <NavBar>
        <h2>Pokedex</h2>
      </NavBar>
      <Content>{list}</Content>
    </div>
  );
};

export default App;
