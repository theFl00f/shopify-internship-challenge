import { LI } from "../blocks/LI";
import { Button } from "./Button";

export const MovieListItem = ({
  movie,
  buttonText,
  onClick,
  alreadyNominated,
  nominations,
}) => {
  return (
    <LI>
      <div className="flex items-center">
        <p className="pr-2">
          {movie.Title} ({movie.Year})
        </p>
        <Button
          disabled={
            alreadyNominated || (nominations && nominations.length >= 5)
          }
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </div>
    </LI>
  );
};
