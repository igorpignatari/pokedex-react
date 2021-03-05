import { PokemonModal } from "./PokemonModal.jsx";
import { useState } from "react";
import styled from "styled-components";
import typeColors from "../helpers/typeColors";
import React, { memo } from "react";
const CardContent = styled.div`
  height: 12rem;
  width: 14rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 1.2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 1.3rem;
`;

const CardImg = styled.div`
  img {
    height: 5rem;
    width: 5rem;
    margin-top: -50px;
  }
`;

const CardName = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  text-transform: capitalize;
  font-size: 1rem;
  align-items: center;
  color: #021448;
  h5 {
    color: #c5c5c5;
  }
  h4 {
    text-transform: capitalize;
  }
`;

export const CardTypes = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  margin-top: 0.7rem;
`;

export const Type = styled.div`
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

const Card = ({ pokemon }) => {
  const [isShow, setIsModal] = useState(false);
  const types = pokemon.types.map((type) => (
    <Type key={type.slot} style={{ background: typeColors[type.type.name] }}>
      {type.type.name}
    </Type>
  ));
  const pokemonId = String(pokemon.id).padStart(3, "0");
  return (
    <>
      <CardContent onClick={() => setIsModal(true)}>
        <CardImg>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </CardImg>
        <CardName>
          <h5>#{pokemonId}</h5>
          <h4>{pokemon.name}</h4>
        </CardName>
        <CardTypes>{types}</CardTypes>
      </CardContent>
      <PokemonModal
        isShow={isShow}
        isClose={() => setIsModal(false)}
        pokemon={pokemon}
      />
    </>
  );
};

export default memo(Card);
