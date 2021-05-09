import React, { Fragment } from "react";
import { H2 } from "../blocks/H2";
import { SectionContainer } from "../blocks/SectionContainer";
import { UL } from "../blocks/UL";
import { MovieListItem } from "./MovieListItem";

export const SearchMovieDisplay = ({
  movies,
  search,
  addNomination,
  nominations,
}) => {
  return (
    <SectionContainer>
      <H2> Results{search && <> for "{search}"</>}</H2>
      <UL>
        {!movies.length && search && <p>No results found.</p>}
        {!!movies.length &&
          movies.map((movie, index) => {
            console.log(nominations);
            const alreadyNominated = !!nominations.filter(
              (nomination) => nomination.imdbID === movie.imdbID
            ).length;

            return (
              <Fragment key={index}>
                <MovieListItem
                  movie={movie}
                  buttonText="Nominate"
                  onClick={() => addNomination(movie)}
                  alreadyNominated={alreadyNominated}
                  nominations={nominations}
                />
              </Fragment>
            );
          })}
      </UL>
    </SectionContainer>
  );
};
