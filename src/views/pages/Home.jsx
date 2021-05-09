import React, { useEffect, useState } from "react";
import { movieDao } from "../../context/persistenceContext";
import { SearchMovieDisplay } from "../components/SearchMovieDisplay";
import { Nominations } from "../components/Nominations";
import { SearchMovies } from "../components/SearchMovies";
import { parse, stringify } from "../util/stringifyUtil";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nominations, setNominations] = useState(
    parse(window.localStorage.getItem("nominations"))
  );

  // Display search results

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    window.localStorage.setItem("nominations", stringify(nominations));
  }, [nominations]);

  // Change nominations

  const addNomination = (movie) => {
    if (
      !!nominations.filter((nomination) => nomination.imdbID === movie.imdbID)
        .length
    ) {
      //should not be reached
      return alert("Oops! Movie has already been nominated.");
    }
    return setNominations([...nominations, movie]);
  };

  const removeNomination = (movie) => {
    const index = nominations.findIndex(
      (notification) => notification.imdbID === movie.imdbID
    );
    const updatedNominations = [...nominations];
    updatedNominations.splice(index, 1);
    setNominations(updatedNominations);
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">The Shoppies</h1>
      <section>
        <SearchMovies setSearch={setSearch} />
      </section>
      <section className="grid md:grid-cols-2 mt-4 gap-4">
        <SearchMovieDisplay
          movies={movies}
          search={search}
          addNomination={addNomination}
          nominations={nominations}
        />
        <Nominations
          nominations={nominations}
          removeNomination={removeNomination}
        />
      </section>
    </>
  );
};
