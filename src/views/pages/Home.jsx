import React, { useEffect, useState } from "react";
import { movieDao } from "../../context/persistenceContext";
import { SearchMovieDisplay } from "../components/SearchMovieDisplay";
import { Nominations } from "../components/Nominations";
import { SearchMovies } from "../components/SearchMovies";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const filterUniqueMovies = (movies) => {
    const result = [];
    const map = new Map();
    for (const movie of movies) {
      if (!map.has(movie.imdbID)) {
        map.set(movie.imdbID, true);
        result.push(movie);
      }
    }
    return result;
  };

  const fetchMovies = async () => {
    try {
      const response = await movieDao.searchMovies(search);
      const data = response.data.Search;
      if (!!data) {
        setMovies(filterUniqueMovies(data));
      } else {
        setMovies([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovies();
    console.log(search);
  }, [search]);

  return (
    <>
      <h1 className="text-2xl font-semibold">The Shoppies</h1>
      <section>
        <SearchMovies setSearch={setSearch} />
      </section>
      <section className="grid grid-cols-2">
        <SearchMovieDisplay movies={movies} search={search} />
        <Nominations />
      </section>
    </>
  );
};
