import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
  const { movies, film } = props;
  //   const { film } = props.films;
  //   console.log(film);

  return (
    <div className='movies '>
      {film ? <Movie key={film.imdbID} {...film} /> : movies.map(movie => <Movie key={movie.imdbID} {...movie} />)}
    </div>
  );
}
export { Movies };
