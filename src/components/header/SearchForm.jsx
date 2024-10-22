import React, { useContext } from "react";
import Search from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/data";
import useDebounce from "../../hooks/useDebounce";

function SearchForm(props) {
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    if (term == "") {
      setSelectedLocation({ location: "", latitude: 0, longitude: 0 });
    }
    const location = getLocationByName(
      term.charAt(0).toUpperCase() + term.slice(1)
    );
    if (location) {
      setSelectedLocation({ ...location });
    }
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          // value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">
          <img src={Search} />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
