import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  max-width: 500px; // Limits the width for a more modern appearance
  margin: 20px auto; // Centrally aligns the search bar

  @media (max-width: 600px) {
    max-width: 100%; // Allows the search bar to fill the available width
    padding: 10px 5px; // Reduces padding on smaller screens
  }
`;

const CitySearch = styled.input`
  flex-grow: 1;
  height: 40px;
  border: 2px solid #ddd; // Subtle border
  border-radius: 20px; // Rounded corners for a modern look
  padding: 0 20px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s; // Smooth transition for focus

  &:focus {
    border-color: #aaa; // Changes border color on focus
  }
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #ffd700; // A modern blue shade
  color: black;
  border: none;
  border-radius: 20px; // Rounded corners to match the input field
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: background-color 0.3s; // Smooth background color transition

  &:hover {
    background-color: #ccac00; // Slightly darker shade on hover
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <SearchContainer>
      <CitySearch
        type="text"
        placeholder="Stedsnavn..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <SearchButton onClick={handleSearch}>
        <FaSearch />
        Søk
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
