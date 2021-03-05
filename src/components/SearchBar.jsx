import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../contexts/PokemonContext.jsx";
const SearchBar = styled.input`
  width: 103rem;
  height: 40px;
  margin-top: 30px;
  border: 0;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  ::placeholder {
    text-indent: 2rem;
    opacity: 0.5;
  }
`;

export const SearchContent = () => {
  const { handleSearch } = useContext(PokemonContext);
  return (
    <SearchBar
      type="search"
      placeholder="Search your Pokemon"
      onChange={handleSearch}
    />
  );
};
