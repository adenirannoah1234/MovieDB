import React from 'react';
import undiscovered from '../../assets/images/undiscovered.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useBookmark } from '../../BookmarkedContext';

const Trending = ({ results }) => {
  const { bookmarks, toggleBookmark } = useBookmark();

  const Api_Image = 'https://image.tmdb.org/t/p/w500/';
  const navigate = useNavigate();

  const isBookmarked = bookmarks.some((movie) => movie.id === results.id);

  const handleBookmarkToggle = () => {
    toggleBookmark(results);
  };

  return (
    <div className="trending">
      {/* <OwlCarousel {...options}> */}
      <div className="trending2">
        <div className="container1">
          <div className="child1">
            <img
              className="undimg"
              src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}
              alt=""
              onClick={() => navigate(`/watch/${results.id}`)}
            />
            <span
              className={`bookmark-icon2 ${
                bookmarks.some((movie) => movie.id === results.id)
                  ? 'bookmarked'
                  : ''
              }`}
              onClick={handleBookmarkToggle}
            >
              <FontAwesomeIcon
                icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
              />
            </span>
            <div className="text">
              <p>{results.first_air_date}</p>
              <span className="dot">&#x25CF;</span>
              <div className="movie">
                <FontAwesomeIcon icon={faFilm} /> <p>Movie</p>
              </div>
              <span className="dot">&#x25CF;</span>
              <p>PG</p>
            </div>
            <h3>{results.name}</h3>
          </div>
        </div>
      </div>
      {/* </OwlCarousel> */}
      {/* ; */}
    </div>
  );
};

export default Trending;
