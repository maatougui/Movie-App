import React from "react";
import MovieCard from "./MovieCard";
import ModalExemple from './modal'
const MoviList = (props) => (
  <div className="movie-list">
    {
      props.movies.map((el) => <MovieCard key={el.id} movie={el} />)
      }
    <div className="new-movie-card">+</div>
    <ModalExemple />
  </div>
);

export default MoviList;
