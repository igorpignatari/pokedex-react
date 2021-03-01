import { PokemonList } from "./components/PokemonList";
import { NavBar } from "./components/NavBar";
import "./style/global.css";
const App = () => {
  return (
    <>
      <NavBar />
      <PokemonList />;
    </>
  );
};

export default App;
