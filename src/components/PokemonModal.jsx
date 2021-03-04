import styled from "styled-components";
import React from "react";
import { StatusBarInfo } from "./StatusBarInfo";
import { Type, CardTypes } from "./Card.jsx";
import typeColors from "../helpers/typeColors";
const ModalBackground = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokemonModalContent = styled.div`
  width: 22rem;
  height: 50rem;
  background: white;
  z-index: 101;
  position: relative;
  border-radius: 30px;
  button {
    font-size: 0;
    border: 0;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
  }
`;

const StatusBarContent = styled.div`
  padding: 10px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  h4 {
    text-transform: uppercase;
    color: #021448;
  }
`;

const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 10rem;
    width: 10rem;
    margin-top: -70px;
  }
  h3 {
    color: #c5c5c5;
    margin-top: 1rem;
  }
  h1 {
    color: #021448;
    margin-top: 0.5rem;
  }
`;

const AbilityContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 50px;
  text-align: center;
  margin-top: 2rem;
  h4 {
    color: #021448;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }
  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

const Ability = styled.div`
  display: flex;
  font-weight: 500;
  color: #021448;
  padding: 7px;
  border: solid 1px;
  border-radius: 30px;
  background: #eff1f7;
  text-transform: capitalize;
`;

const HeightWeight = styled.div`
  border-radius: 30px;
  background: #eff1f7;
  color: #021448;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 1.5rem;
  margin-top: 1rem;
`;

const HeightWeightContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      text-transform: uppercase;
      color: #021448;
    }
  }
`;
export const PokemonModal = ({ pokemon, isShow, isClose }) => {
  const statusBarList = pokemon.stats.map((status) => (
    <StatusBarInfo
      key={status.stat.name}
      baseStatus={status.base_stat}
      nameStatus={status.stat.name}
    />
  ));

  const pokemonId = String(pokemon.id).padStart(3, "0");

  const pokemonTypes = pokemon.types.map((type) => (
    <Type key={type.slot} style={{ background: typeColors[type.type.name] }}>
      {type.type.name}
    </Type>
  ));
  const pokemonAbilities = pokemon.abilities.map((ability) => (
    <Ability
      key={ability.slot}
      style={{ borderColor: ability.is_hidden ? "#cd7779" : "#c5c5c5" }}
    >
      {ability.ability.name}
    </Ability>
  ));
  return isShow ? (
    <ModalBackground>
      <PokemonModalContent>
        <button onClick={isClose}>
          <img src="icons/close.svg" alt="close" />
        </button>
        <PokemonInfo>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <h3>#{pokemonId}</h3>
          <h1>{pokemon.name}</h1>
        </PokemonInfo>
        <CardTypes
          style={{
            marginTop: "1.5rem",
            width: "13rem",
            marginLeft: "4.53rem",
          }}
        >
          {pokemonTypes}
        </CardTypes>
        <AbilityContent>
          <h4>abilities</h4>
          <div>{pokemonAbilities}</div>
        </AbilityContent>
        <HeightWeightContent>
          <div>
            <h4>height</h4>
            <HeightWeight>{pokemon.height}</HeightWeight>
          </div>
          <div>
            <h4>weight</h4>
            <HeightWeight>{pokemon.weight}</HeightWeight>
          </div>
        </HeightWeightContent>
        <StatusBarContent>
          <h4>status</h4>
          {statusBarList}
        </StatusBarContent>
      </PokemonModalContent>
    </ModalBackground>
  ) : null;
};
