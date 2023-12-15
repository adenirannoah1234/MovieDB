import React from 'react';
import { useBookmark } from '../../BookmarkedContext';
import NavigationBar from '../../components/navigationbar/NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/search/Search';
import { useNavigate } from 'react-router-dom';

const Bookmarks = ({ setSearchInput }) => {
  const { bookmarks } = useBookmark();
  console.log(bookmarks);
  const Api_Image = 'https://image.tmdb.org/t/p/w500/';
  const navigate = useNavigate();
  const { bookmarkedMovies, removeBookmark } = useBookmark();
  const handleRemoveBookmark = (movieId) => {
    removeBookmark(movieId);
  };
  // Example of handling search input change
  const handleSearchInputChange = (event) => {
    const newSearch = event.target.value;
    setSearchInput(newSearch); // Call setSearchInput to update the searchInput state
  };

  return (
    <div className="book-main">
      <NavigationBar />
      <div className="book-two">
        <Search setSearchInput={handleSearchInputChange} />
        <div className="book">
          {bookmarks.map((movie) => (
            <div key={movie.id}>
              {/* Render movie details here */}
              <div className="position">
                <img
                  className="undimg"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                  onClick={() => navigate(`/watch/${movie.id}`)}
                />
                <span
                  className="bookmark-icon3"
                  onClick={() => handleRemoveBookmark(movie.id)}
                >
                  <FontAwesomeIcon icon={faBookmark} />
                </span>
              </div>
              <div className="texts">
                <p>{movie.release_date}</p>
                <span className="dots">&#x25CF;</span>
                <div className="movies">
                  <FontAwesomeIcon icon={faFilm} /> <p>Movie</p>
                </div>
                <span className="dots">&#x25CF;</span>
                <p>PG</p>
              </div>
              <h2 className="titles">{movie.title}</h2>
              {/* <p>{movie.overview}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
