import React from "react";

export const SearchMovieDisplay = ({ movies, search }) => {
  console.log(movies);
  return (
    <ul>
      {!!movies.length && search && <h2>Results for "{search}"</h2>}

      {!movies.length && search && <p>No results for "{search}" found.</p>}
      {!!movies.length &&
        movies.map((movie) => (
          <li key={movie.imdbID}>
            <p>
              {movie.Title}({movie.Year})
            </p>
            <button>Nominate</button>
          </li>
        ))}
    </ul>
  );
};
