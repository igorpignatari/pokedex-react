import { PokemonModal } from "./PokemonModal.jsx";
import { useState } from "react";
import styled from "styled-components";
import typeColors from "../helpers/typeColors";

const CardContent = styled.div`
  height: 15rem;
  width: 12.5rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 1.2rem;
  box-shadow: 7px 10px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin: 1.3rem;
`;

const CardImg = styled.div`
  img {
    height: 5rem;
    width: 5rem;
  }
`;

const CardName = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  text-transform: capitalize;
  font-size: 1rem;
  align-items: center;
`;

const CardTypes = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 3rem;
  flex: 1;
  width: 100%;
  align-items: center;
  margin-top: 1.2rem;
`;

const Type = styled.div`
  display: flex;
  background: cyan;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 2rem;
  width: 4rem;
  color: white;
  font-weight: 600;
`;

export const Card = ({ pokemon }) => {
  const [isModal, setIsModal] = useState(false);

  const types = pokemon.types.map((type) => (
    <Type key={type.slot} style={{ background: typeColors[type.type.name] }}>
      {type.type.name}
    </Type>
  ));
  const pokemonId = String(pokemon.id).padStart(3, "0");
  return (
    <>
      <CardContent
        onClick={() => {
          setIsModal(true);
        }}
      >
        <CardImg>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </CardImg>
        <CardName>
          <h4>#{pokemonId}</h4>
          <h4>{pokemon.name}</h4>
        </CardName>
        <CardTypes>{types}</CardTypes>
      </CardContent>
      <PokemonModal
        isShow={isModal}
        isClose={() => setIsModal(false)}
        pokemon={pokemon}
      />
    </>
  );
};
