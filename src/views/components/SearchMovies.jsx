export const SearchMovies = ({ setSearch }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col bg-white p-4">
      <label className="mb-1" htmlFor="search">
        Movie title
      </label>
      <input
        onChange={handleChange}
        className="w-full border-gray-200 border-solid border-2 rounded-sm"
        type="text"
        name="search"
      />
    </div>
  );
};
