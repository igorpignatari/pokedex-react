import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../contexts/PokemonContext";
import Card from "../components/Card";
const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem;
  justify-content: center;
  margin-top: 30px;
`;

export const Content = () => {
  const { pokemons, filter } = useContext(PokemonContext);
  const list = pokemons.map(
    (pokemon) =>
      pokemon.name.includes(filter) && (
        <div key={pokemon.id}>
          <Card pokemon={pokemon} />
        </div>
      )
  );

  return <ContentDiv>{list}</ContentDiv>;
};
