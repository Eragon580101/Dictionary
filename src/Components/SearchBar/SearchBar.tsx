import { forwardRef, useState } from "react";
import "./SearchBar.scss";

interface Props {
  handleSearch: (e: React.FormEvent<HTMLFormElement>, search: string) => void;
}

export type Ref = HTMLFormElement;

export const SearchBar = forwardRef<Ref, Props>((props, ref) => {
    const { handleSearch } = props;
    
    const [search, setSearch] = useState<string>("");

    const passSearch = (e: React.FormEvent<HTMLFormElement>) => {
        handleSearch(e, search);
    };

  return (
    <form className="search-bar" ref={ref} onSubmit={passSearch}>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search for a word"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-bar__button">
        <i className="fas fa-magnifying-glass icon"></i>
      </button>
    </form>
  );
});
