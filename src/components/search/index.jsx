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
    padding: 10px 5px; // Slightly reduces padding
  }

  @media (max-width: 460px) {
    flex-direction: column; // Stacks the input field and search button vertically
    gap: 5px;
  }
`;

const CitySearch = styled.input`
  flex-grow: 1;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 20px;
  padding: 0 15px; // Reduced padding for smaller screens
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #aaa;
  }

  @media (max-width: 460px) {
    width: 100%; // Full width to maximize space
    padding: 0 10px; // Further reduce padding on very small screens
  }
`;

const SearchButton = styled.button`
  padding: 8px 12px; // Slightly reduced padding
  background-color: #ffd700;
  color: black;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #ccac00;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 460px) {
    margin-top: 16px;
    padding: 8px; // Further reduce padding for the button
    width: 40%; // Allow the button to fill the available width
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
