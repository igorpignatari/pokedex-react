import styled from "styled-components";
import React from "react";

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
  width: 25rem;
  height: 27rem;
  background: white;
  z-index: 101;
  position: relative;
  border-radius: 10px;
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
  margin-top: 20px;
`;

const StatusBarInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatusBar = styled.div`
  height: 3px;
  background: #cccccc;
  border-radius: 7px;
  div {
    height: 3px;
    border-radius: 7px;
    background: #9bcc50;
    width: 50%;
  }
`;

const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 10rem;
    width: 10rem;
  }
`;

export const PokemonModal = ({ pokemon, isShow, isClose }) => {
  return isShow ? (
    <ModalBackground>
      <PokemonModalContent>
        <button onClick={isClose}>
          <img src="icons/close.svg" alt="close" />
        </button>
        <PokemonInfo>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>#{pokemon.id}</h3>
          <h3>{pokemon.name}</h3>
        </PokemonInfo>
        <StatusBarContent>
          <>
            <StatusBarInfo>
              <span>HP</span>
              <span>0/500</span>
            </StatusBarInfo>
            <StatusBar>
              <div />
            </StatusBar>
          </>
          <>
            <StatusBarInfo>
              <span>ATTACK</span>
              <span>0/500</span>
            </StatusBarInfo>
            <StatusBar>
              <div />
            </StatusBar>
          </>
          <>
            <StatusBarInfo>
              <span>DEFENSE</span>
              <span>0/500</span>
            </StatusBarInfo>
            <StatusBar>
              <div />
            </StatusBar>
          </>
          <>
            <StatusBarInfo>
              <span>SPECIAL ATTACK</span>
              <span>0/500</span>
            </StatusBarInfo>
            <StatusBar>
              <div />
            </StatusBar>
          </>
          <>
            <StatusBarInfo>
              <span>SPECIAL DEFENSE</span>
              <span>0/500</span>
            </StatusBarInfo>
            <StatusBar>
              <div />
            </StatusBar>
          </>
          <>
            <StatusBarInfo>
              <span>SPEED</span>
              <span>0/500</span>
            </StatusBarInfo>
            <StatusBar>
              <div />
            </StatusBar>
          </>
        </StatusBarContent>
      </PokemonModalContent>
    </ModalBackground>
  ) : null;
};
