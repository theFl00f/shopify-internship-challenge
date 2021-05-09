import React from "react";
import { H2 } from "../blocks/H2";
import { SectionContainer } from "../blocks/SectionContainer";
import { UL } from "../blocks/UL";
import { MovieListItem } from "./MovieListItem";

export const Nominations = ({ removeNomination, nominations }) => {
  return (
    <SectionContainer>
      <H2>Nominations</H2>
      {nominations && nominations.length >= 5 && (
        <p className="bg-gray-500 text-white px-2 py-1 my-2 rounded-sm">
          Thank you for selecting your nominees!
        </p>
      )}
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
