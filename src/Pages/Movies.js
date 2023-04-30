import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import Navigationbar from "../Components/NavigationBar";
import { getMovieList, searchMovie } from "../api";

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      console.log(query);
    }
  };

  return (
    <div className="container">
      <Navigationbar />
      <div className="row d-flex justify-content-center my-5">
        <div className="col-12 col-md-6">
          <h1 className="text-center">ED MOVIE</h1>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              placeholder="Search"
              onChange={({ target }) => search(target.value)}
            />
          </form>
        </div>
      </div>

      <div className="row mb-5">
        {popularMovies.map((movies) => (
          <div className="col-md-6 col-lg-4 mb-4" key={movies.id}>
            <MovieCard movie={movies} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Movies;
