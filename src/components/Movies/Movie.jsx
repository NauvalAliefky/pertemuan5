const Movie = ({ title, year, poster, genre }) => {
  // genre bisa saja string atau array (di contoh HTML bisa banyak badge)
  const genres = Array.isArray(genre) ? genre : [genre];
  return (
    <div className="movie-card">
      <img src={poster} alt={`Poster film ${title}`} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-genre">
          {genres.map((g, i) => (
            <span key={i} className="genre-badge">
              {g}
            </span>
          ))}
        </div>
        <span className="movie-year">{year}</span>
      </div>
    </div>
  );
};

export default Movie;