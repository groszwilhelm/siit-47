import { HiOutlineSearch } from "react-icons/hi";
import PropTypes from 'prop-types';

import './Search.css';


function Search({ onSearchChange }) {

  function inputChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="search-container">
      <HiOutlineSearch className="search-icon" />
      <input
        onChange={inputChange}
        className="search"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default Search;

Search.propTypes = {
  onSearchChange: PropTypes.func,
};
