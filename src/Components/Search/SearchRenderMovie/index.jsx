import { Navigate, useNavigate } from "react-router-dom"
import "./index.css"

const SearchRenderMovie = (props) => {
    const {movie} = props
    const {id, posterPath} = movie 
    
    const navigate = useNavigate()
    const onHandleSearchImage = (movieId) => () => {
       navigate(`/movies-app/movies/${id}`, { replace: false });
    }

    
  return (
    <>
        <img src={posterPath} alt="avatar" className="movie-poster" onClick={onHandleSearchImage(id)} />
    </>
    
  )
}

export default SearchRenderMovie