const MovieCard = ({ movie }) => {
  const baseImgUrl = process.env.REACT_APP_BASEIMGURL;

  return (
    <div className="card h-100">
      {movie.backdrop_path ? (
        <img
          src={`${baseImgUrl}/${movie.backdrop_path}`}
          className="card-img-top"
          alt={movie.title}
        />
      ) : (
        <img
          src="../../no_image.png"
          className="card-img-top"
          alt={movie.title}
        />
      )}

      <div className="card-body">
        <h3 className="card-title mb-4">{movie.title}</h3>
        <p className="card-text clamp-desc-3">{movie.overview}</p>
        <hr />
        <ul className="p-0 mt-4">
          <li>
            <i className="bi bi-calendar2-minus-fill"></i>
            <span className="ms-3 fw-bold">Release Date :</span>{" "}
            {movie.release_date}
          </li>

          <li>
            <i className="bi bi-star-half"></i>
            <span className="ms-3 fw-bold">Rating :</span>{" "}
            <u className="fw-bold text-danger text-underline">
              {movie.vote_average}
            </u>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
