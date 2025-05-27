import Movies from "../../data/movies";

export default function Main() {
  return (
    <main>
      <div className="container">
        <h1>Movies Page</h1>

        <div className="row row-cols-3 g-3">
          {Movies.map((movie) => (
            <div className="col">
              <div className="card">
                <div className="card-header">{movie.title}</div>
                <div className="card-body">{movie.genre}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
