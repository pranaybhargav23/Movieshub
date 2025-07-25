
import {
  FaSearch,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "./index";
import Cookies from "js-cookie";
import "./index.css";
import Header from "../Header";
import Footer from "../Footer";
import YoutubeVideo from "../YoutubeTrailers";

const YoutubeIds = ["BIhNsAtPbPI", "8YjFbMbfXaQ"];

const Avengers = () => {
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({});
  const [genre, setGenres] = useState([]);
  const [language, setLanguage] = useState([]);
  const [images, setImages] = useState([]);
 
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/Login" />;
  }

  const { movieId } = useParams();

  const onPlayVideo = (ids) => {
    
    navigate(`/trailer/${ids}`, { replace: true });
  }

  useEffect(() => {
    const fetchingCurrentImage = async () => {
      const url = "https://apis.ccbp.in/movies-app/movies/" + movieId;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();

      const modifiedData = {
        id: data.movie_details.id,
        title: data.movie_details.title,
        backDropPath: data.movie_details.backdrop_path,
        posterUrl: data.movie_details.poster_url,
        overview: data.movie_details.overview,
        release_date: data.movie_details.release_date,
        votingCount: data.movie_details.vote_count,
        votingAverage: data.movie_details.vote_average,
        budget: data.movie_details.budget,
        releaseData: data.movie_details.release_date,
      };

      const genres = data.movie_details.genres.map((each) => each.name);

      const audio = data.movie_details.spoken_languages.map(
        (eachAudio) => eachAudio.english_name
      );

      setMovieData(modifiedData);
      setGenres(genres);
      setLanguage(audio);
    };

    fetchingCurrentImage();
  }, []);
  
 

  return (
    <>
      <Wrapper $bgImage={movieData.backDropPath}>
        <div className="Avengers-home-background">
          {/* <div className="Avengers-home-header">
              <div className="Avengers-home-logo-container">
                  <h1 className="Avengers-home-heading">MOVIES</h1>
                  <div className="Avengers-home-header-links">
                    <p>
                        <Link to="/" className="linking-underline Avengers-nav-elements" >Home</Link>
                    </p>
                     <p>
                        <Link to="/PopularMovies" className="linking-underline Avengers-nav-elements" >Popular</Link>
                      </p>
                   
                    
                  </div>
                </div>
              <div className="home-header-icons">
                <FaSearch className="search-icon"/>
                <div>
                    <input type="checkbox" id="menu-toggle" />
                      <label htmlFor="menu-toggle" className="menu-icon"><img src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1747820863/add-to-queue_1_wzjrc4.png" className="hamburger-icon"/></label>
                  
                      <nav className="menu">
                        <a className="nav-item" href="#">Home</a>
                        <a className="nav-item" href="#">Popular</a>
                        <a className="nav-item" href="#">Account</a>
                        <a className="nav-item" href="#">Logout</a>
                      </nav>
                </div>
                
              </div>
              
          </div>
          <div className="Avengers-home-header-show">
            <div className="Avengers-home-width">
                <div className="Avengers-home-logo-container-show">
                  <h1>
                    <Link to="/"  className="Avengers-home-heading-show ">MOVIES</Link>
                  </h1>
                  <div className="Avengers-home-header-links-show">
                    <p >
                      <Link to="/" className="Avengers-nav-elements-show linking-underline ">Home</Link>
                    </p>
                    <p >
                      <Link to="/PopularMovies" className="Avengers-nav-elements-show linking-underline "> Popular</Link>
                    </p>
                  </div>

                </div>
              <div className="Avengers-home-header-icons-show">
                <Link to="/Search" className="linking-underline">
                  <FaSearch className="Avengers-search-icon-show"/>
                </Link> 
                <Link to="/Account" className="linking-underline">
                    <div className="Avengers-image-container">
                  <img src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1747907021/Mask_Group_pp1p2q.png" className="Avengers-image"/>
                  
                </div>
                </Link>
                
              
                </div> 
            </div>
            </div>    */}
          <Header />
          
            <div className="Avengers-container">
              <h1 className="Avenger-heading">{movieData.title}</h1>

              <div className="avengers-time-container">
                <p className="movie-run-time">2h 42m</p>
                <button className="ua-button">U/A</button>
                <p className="year-value">2007</p>
              </div>
              <p className="description-long"> {movieData.overview}</p>
              <div>
                
                <button
                  className="Avengers-play-button"
                  onClick={() => onPlayVideo(movieData.id)}
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        
      </Wrapper>

      <div className="movies-details-background">
        <div className="movies-details-container">
          <div className="movie-details-text-container">
            <h2 className="movie-details-heading">Genres</h2>
            {genre.map((each) => (
              <p className="movie-details-sub-heading" key={each}>
                {each}
              </p>
            ))}
          </div>
          <div className="movie-details-text-container">
            <h2 className="movie-details-heading">Audio Available</h2>
            {language.map((each) => (
              <p className="movie-details-sub-heading" key={each}>
                {each}
              </p>
            ))}
          </div>
          <div className="movie-details-text-container">
            <h2 className="movie-details-heading">Rating Count</h2>
            <p className="movie-details-sub-heading">{movieData.votingCount}</p>
            <h2 className="movie-details-heading">Rating Average</h2>
            <p className="movie-details-sub-heading">
              {movieData.votingAverage}
            </p>
          </div>
          <div className="movie-details-text-container">
            <h2 className="movie-details-heading">Budget</h2>
            <p className="movie-details-sub-heading">{movieData.budget}</p>
            <h2 className="movie-details-heading">Release Date</h2>
            <p className="movie-details-sub-heading">{movieData.releaseData}</p>
          </div>
        </div>
        <div className="movirs-detaiks-container">
          <h1 className="more-like-heading">More like this</h1>
          <div className="more-like-images-container">
            <img
              src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1748238419/626c3c7e7f519c7f4d59e86daa7fb9ae2348231f_sxd8n0.jpg"
              className="more-like-images"
            />
            <img
              src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1748238428/186867d32d261482acb726a1cd3ab23d58b1aa5d_z6y0iw.jpg"
              className="more-like-images"
            />
            <img
              src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1748238436/ce231c0dddee73ff696225ba06d6d89cd03b8f01_hydj3v.jpg"
              className="more-like-images"
            />
            <img
              src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1748238446/630919dd21885c781a71d5016f2986dc0d8a12a2_jxwy3j.jpg"
              className="more-like-images"
            />
            <img
              src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1748238454/3f91b246769910a4b74409aefa9e1c9028fa54df_tnj38w.jpg"
              className="more-like-images"
            />
            
          </div>
        </div>
       <Footer/>
      </div>
    </>
  );
};

export default Avengers;
