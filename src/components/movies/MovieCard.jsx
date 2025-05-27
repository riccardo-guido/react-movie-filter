export default function MovieCard({ movie }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">{movie.title}</div>
        <div className="card-body">{movie.genre}</div>
      </div>
    </div>
  );
}
