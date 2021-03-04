import { NavBar } from "./components/NavBar.jsx";
import { Content } from "./components/Content.jsx";
import { Container } from "./components/Container";
import { SearchBar } from "./components/SearchBar";
import { PokemonProvider } from "./contexts/PokemonContext";
import "./style/global.css";

const App = () => {
  return (
    <div>
      <PokemonProvider>
        <NavBar>
          <h2>Pokedex</h2>
        </NavBar>
        <Container>
          <SearchBar type="search" placeholder="Search your Pokemon!" />
          <Content />
        </Container>
      </PokemonProvider>
    </div>
  );
};

export default App;
