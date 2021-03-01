import React, { useState } from "react";
import colorType from "../helpers/typeColors";
import { PokemonModal } from "../components/PokemonModal";

export const Card = ({ pokemon }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const pokemonType = pokemon.types.map((type) => (
    <div
      className="type"
      key={type.slot}
      style={{ background: colorType[type.type.name] }}
    >
      {type.type.name}
    </div>
  ));

  const id = String(pokemon.id).padStart(3, "0");
  return (
    <>
      <div className="card" onClick={() => setIsShowModal(true)}>
        <div className="card_img">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="card_name">
          <h4>
            {pokemon.name} #{id}
          </h4>
        </div>
        <div className="card_type">{pokemonType}</div>
      </div>
      <PokemonModal
        isShow={isShowModal}
        isClose={() => setIsShowModal(false)}
        pokemon={pokemon}
      />
    </>
  );
};
