import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionContainer } from "../blocks/SectionContainer";

export const SearchMovies = ({ setSearch }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // 50% minus half of height of icon (font size / 2)
  const inset = "calc(50% - (1rem / 2))";

  return (
    <SectionContainer className="flex flex-col">
      <label className="mb-1" htmlFor="search">
        Movie title
      </label>
      <div className="relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute text-gray-500 left-3"
          style={{ top: inset, bottom: inset }}
        />
        <input
          onChange={handleChange}
          className="w-full border-gray-200 border-solid border-2 rounded-sm pl-10 py-1"
          type="text"
          name="search"
        />
      </div>
    </SectionContainer>
  );
};
