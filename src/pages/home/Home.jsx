import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/navigationbar/NavigationBar';
import Search from '../../components/search/Search';
import Trending from '../../components/trending/Trending';
import Recommended from '../../components/recommended/Recommended';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  const Movies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=3d85914051809aca2169b9d529bd071a&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc '
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    Movies();
  }, []);

  const Recommend = async () => {
    const apiKey = '3d85914051809aca2169b9d529bd071a';
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      const data = await response.json();
      setRecommended(data.results);
      // setSearchResults(data.results);
      console.log(data);
    } catch (error) {
      console.error('Error fetching recommende movies', error);
    }
  };

  useEffect(() => {
    Recommend();
  }, []);

  // const searchHandler = (query) => {
  //   searchMovies(query);
  // };

  const handleSearch = () => {
    const updatedSearch = someSearch(newSearch);
    setSearchInput(updatedSearch);
  };
  return (
    <>
      <div className="main-container">
        <NavigationBar />
        <section>
          <Search setSearchInput={setSearchInput} />

          <div>
            <h1>Trending </h1>
            <div className="grid">
              {movies &&
                movies
                  .filter(
                    (movie) =>
                      typeof movie.title === 'string' &&
                      movie.title
                        .toLowerCase()
                        .includes(searchInput.toString().toLowerCase())
                  )
                  .map((results) => (
                    <Trending results={results} key={results.id} {...results} />
                  ))}

              {/* {movies &&
                movies.map((results) => (
                  <Trending results={results} key={results.id} {...results} />
                ))} */}
            </div>
          </div>

          <div>
            <h1>Recommend for you</h1>
            <div className="grid2">
              {recommended &&
                recommended.map((recommend) => (
                  <Recommended recommend={recommend} />
                ))}
            </div>
          </div>
          {/* <div className="grid">
            {searchResults &&
              searchResults.map((result) => (
                <Trending results={result} key={result.id} {...result} />
              ))}
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Home;
