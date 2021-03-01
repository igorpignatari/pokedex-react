import React from "react";
import colorType from "../helpers/typeColors";

const StatusPokemon = ({ name, bar, status }) => {
  return (
    <div className="status_bar">
      <div>
        <span>{name}</span>
        <span>{status}/500</span>
      </div>
      <div>
        <div style={{ width: `${bar}%` }}></div>
      </div>
    </div>
  );
};

export const PokemonModal = ({ pokemon, isShow, isClose }) => {
  const pokemonType = pokemon.types.map((type) => (
    <div
      className="type"
      key={type.slot}
      style={{ background: colorType[type.type.name] }}
    >
      {type.type.name}
    </div>
  ));

  const idPokemon = String(pokemon.id).padStart(3, "0");

  const hpBar = Math.floor((pokemon.stats[0].base_stat * 100) / 500);
  const attackBar = Math.floor((pokemon.stats[1].base_stat * 100) / 500);
  const defenseBar = Math.floor((pokemon.stats[2].base_stat * 100) / 500);
  const specialAttackBar = Math.floor((pokemon.stats[3].base_stat * 100) / 500);
  const specialDefenseBar = Math.floor(
    (pokemon.stats[4].base_stat * 100) / 500
  );
  const speedBar = Math.floor((pokemon.stats[5].base_stat * 100) / 500);

  const hpStatus = pokemon.stats[0].base_stat;
  const attackStatus = pokemon.stats[1].base_stat;
  const defenseStatus = pokemon.stats[2].base_stat;
  const specialAttackStatus = pokemon.stats[3].base_stat;
  const specialDefenseStatus = pokemon.stats[4].base_stat;
  const speedStatus = pokemon.stats[5].base_stat;

  return isShow ? (
    <div className="modal_background">
      <div>
        <header>
          <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />

            <h3>
              {pokemon.name} #{idPokemon}
            </h3>

            <p>
              weight: {pokemon.weight} height: {pokemon.height}
            </p>
          </div>
          <div>{pokemonType}</div>
        </header>
        <div>
          <StatusPokemon name={"hp:"} bar={hpBar} status={hpStatus} />
          <StatusPokemon
            name={"attack:"}
            bar={attackBar}
            status={attackStatus}
          />
          <StatusPokemon
            name={"defense:"}
            bar={defenseBar}
            status={defenseStatus}
          />
          <StatusPokemon
            name={"special attack:"}
            bar={specialAttackBar}
            status={specialAttackStatus}
          />
          <StatusPokemon
            name={"special defense:"}
            bar={specialDefenseBar}
            status={specialDefenseStatus}
          />
          <StatusPokemon name={"speed:"} bar={speedBar} status={speedStatus} />
        </div>
        <button type="button" onClick={isClose}>
          <img src="icons/close.svg" alt="close" />
        </button>
      </div>
    </div>
  ) : null;
};
