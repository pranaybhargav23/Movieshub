import "./index.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const PopularMovie = (props) => {
  const { movies } = props;
  const { id, posterPath } = movies;
  console.log(movies);

  const navigate = useNavigate();
  const handleImagePopular = (id) => {
    navigate(`/movies-app/movies/${id}`, { replace: false });
  };

  return (
    <>
      <img
        src={posterPath}
        className="poster-image"
        alt="poster"
        onClick={() => handleImagePopular(id)}
      />
    </>
  );
};

export default PopularMovie;
