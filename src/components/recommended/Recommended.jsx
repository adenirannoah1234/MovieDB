import React from 'react';
import discovered from '../../assets/images/beyond.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { useBookmark } from '../../BookmarkedContext';

const Recommended = ({ recommend }) => {
  // const Api_Image = 'https://image.tmdb.org/t/p/w500/';
  const { bookmarks, toggleBookmark } = useBookmark();
  const navigate = useNavigate();
  const isBookmarked = bookmarks.some((movie) => movie.id === recommend.id);

  const handleBookmarkToggle = () => {
    toggleBookmark(recommend);
  };

  return (
    <section className="recommendedbox">
      <div className=" recommended">
        <div className="container2">
          <div className="child2">
            <img
              className="discover"
              src={`https://image.tmdb.org/t/p/w500/${recommend.poster_path}`}
              alt=""
              onClick={() => navigate(`/watch/${recommend.id}`)}
              // onClick={() => navigate('/watch')}
            />
            <span
              className={`bookmark-icon4 ${
                bookmarks.some((movie) => movie.id === recommend.id)
                  ? 'bookmarked'
                  : ''
              }`}
              onClick={handleBookmarkToggle}
            >
              <FontAwesomeIcon
                icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
              />
            </span>
            <div className="text2">
              <p>{recommend.release_date}</p>
              <span className="dot">&#x25CF;</span>
              <div className="movie">
                <FontAwesomeIcon icon={faFilm} /> <p>Movie</p>
              </div>
              <span className="dot">&#x25CF;</span>
              <p>PG</p>
            </div>
            <h3>{recommend.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
