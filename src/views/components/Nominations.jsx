import React from "react";
import { H2 } from "../blocks/H2";
import { SectionContainer } from "../blocks/SectionContainer";
import { UL } from "../blocks/UL";
import { MovieListItem } from "./MovieListItem";

export const Nominations = ({ nominations, removeNomination }) => {
  return (
    <SectionContainer>
      <H2>Nominations</H2>
      <UL>
        {nominations &&
          nominations.map((nomination, index) => (
            <MovieListItem
              movie={nomination}
              buttonText="Remove"
              onClick={removeNomination}
              key={index}
            />
          ))}
      </UL>
    </SectionContainer>
  );
};
