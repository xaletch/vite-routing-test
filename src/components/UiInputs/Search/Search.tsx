import { link_icon } from "../../../app/icons";
import "./search.css";
import { SearchProps } from "./types/serarch.interface";

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder,
  handleSearch,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <span className="search__icon" onClick={handleSearch}>
        <img src={link_icon.search} alt="искать" />
      </span>
    </div>
  );
};
