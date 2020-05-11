import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = ({ content }) => {
  let poster =
    content.poster_path === null
      ? `https://www.pielesvelasquez.com/wp-content/uploads/2014/07/placehold.it-500x750.gif`
      : `https://image.tmdb.org/t/p/w500${content.poster_path}`;

  let theTitle = content.title === undefined ? content.name : content.title
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
            <div className="img-container">
            <img
            src={poster}
            alt={theTitle}
            className="card-img-top"
            width="100"
          />
            </div>

          <h3>{theTitle}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>{content.overview}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string
  }).isRequired,
  typeContent : PropTypes.shape(PropTypes.string)
};

export default Card;
