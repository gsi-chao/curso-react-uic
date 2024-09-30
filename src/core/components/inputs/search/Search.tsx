import { SearchIcon } from "../../icons";
import "./search.css";

const SearchInput = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search" />
      <SearchIcon className="search-icon"/>
    </div>
  );
};

export default SearchInput;
