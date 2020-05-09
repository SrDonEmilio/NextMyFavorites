import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = ({ movie }) => {
  let poster =
    movie.poster_path === null
      ? `https://www.pielesvelasquez.com/wp-content/uploads/2014/07/placehold.it-500x750.gif`
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
            <div className="img-container">
            <img
            src={poster}
            alt={movie.title}
            className="card-img-top"
            width="100"
          />
            </div>

          <h3>{movie.title}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string
  }).isRequired,
};

export default Card;
