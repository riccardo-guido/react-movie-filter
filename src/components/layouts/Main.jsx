import { useState, useEffect } from "react";
import movies from "../../data/movies";
import MoviesList from "../movies/MoviesList";

export default function Main() {
  const [genreFilter, setGenreFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const genres = [...new Set(movies.map((movie) => movie.genre))];

  useEffect(() => {
    if (genreFilter === "") {
      setFilteredMovies(movies); // Nessun filtro
    } else {
      setFilteredMovies(movies.filter((movie) => movie.genre === genreFilter));
    }
  }, [genreFilter]);

  return (
    <main>
      <div className="container">
        <h1>Movies Page</h1>

        <h2>Filter by Genre</h2>
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="form-control"
        >
          <option value="">Seleziona un genere</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <MoviesList movies={filteredMovies} />
      </div>
    </main>
  );
}
