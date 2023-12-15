import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/navigationbar/NavigationBar';
import { useNavigate, useParams } from 'react-router-dom';
// import { useParams } from 'react-router';

const Watch = () => {
  const [watch, setWatch] = useState([]);
  const { movie_id } = useParams();
  console.log(movie_id);
  const navigate = useNavigate();

  const watchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=3d85914051809aca2169b9d529bd071a`
      );

      if (response.ok) {
        const data = await response.json();
        setWatch(data);
        console.log(data);
      } else {
        console.error('Error fetching movie:', response.status);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    watchMovies();
  }, []);

  return (
    <div className="watch-page">
      <NavigationBar />
      <div>
        {watch ? (
          <div className="detailss">
            <h1></h1>
            <img
              src={`https://image.tmdb.org/t/p/w500/${watch.poster_path}`}
              alt=""
              className="detsimg"
            />
            <div className="child1">
              <h1 className="title">{watch.title}</h1>
              <div className="genres">
                <h3>Genres : </h3>
                <ul className="genre">
                  {watch.genres &&
                    Array.isArray(watch.genres) &&
                    watch.genres.map((genre) => (
                      <li className="genlist" key={genre.id}>
                        {genre.name}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="overview">
                <h3>Overview :</h3>
                <p>{watch.overview}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Watch;
