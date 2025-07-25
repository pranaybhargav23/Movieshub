import {
  FaSearch,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Header from "../Header";
import Footer from "../Footer";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");
  

  const onHandleNavigate = () => {
    navigate("/trailers")
  }
  useEffect(() => {
    const fetchMovies = async (url, setter) => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const movies = data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            backdropPath: movie.backdrop_path,
            posterPath: movie.poster_path,
            overview: movie.overview,
          }));
          setter(movies);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies(
      "https://apis.ccbp.in/movies-app/trending-movies",
      setTrendingMovies
    );
    fetchMovies("https://apis.ccbp.in/movies-app/originals", setOriginalMovies);
  }, [jwtToken]);

  const handleMovieClick = (id) => {
    navigate(`/movies-app/movies/${id}`, { replace: true });
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, dots: true, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  };
  

  if (!jwtToken) return <Navigate to="/Login" />;

  return (
    <>
      <div className="home-background">
        {/* Header */}
        {/* <header className="home-header">
          <div className="home-logo-container">
            <img
              src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/react-js/coding-practices/moviesApp/moviesAppWebsiteLogo.png"
              alt="movies logo"
              className="movies-logo"
            />
            <nav className="home-header-links">
              <p className="nav-elements">Home</p>
              <Link
                to="/PopularMovies"
                className="linking-underline nav-elements"
              >
                Popular
              </Link>
            </nav>
          </div>

          <div className="home-header-icons">
            <FaSearch className="search-icon" />
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
              <img
                src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1747820863/add-to-queue_1_wzjrc4.png"
                alt="menu"
                className="hamburger-icon"
              />
            </label>
            <nav className="menu">
              <Link to="/" className="linking-underline nav-item">
                Home
              </Link>
              <Link to="/PopularMovies" className="linking-underline nav-item">
                Popular
              </Link>
              <Link to="/Account" className="linking-underline nav-item">
                Account
              </Link>
              <Link to="/Login" className="linking-underline nav-item">
                Logout
              </Link>
            </nav>
          </div>
        </header> */}

        {/* Mobile Header */}
        {/* <div className="home-header-show1">
          <div className="home-width">
            <div className="home-logo-container-show">
              <img src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/react-js/coding-practices/moviesApp/moviesAppWebsiteLogo.png" alt="movies logo" className="movies-logo" />
              <nav className="home-header-links-show">
                <Link to="/" className="linking-underline nav-elements-show">
                  Home
                </Link>
                <Link
                  to="/PopularMovies"
                  className="linking-underline nav-elements-show"
                >
                  Popular
                </Link>
              </nav>
            </div>

            <div className="home-header-icons-show">
              <Link to="/Search" className="linking-underline">
                <FaSearch className="search-icon-show" />
              </Link>
              <div className="profile-container">
                <img
                  src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1747907021/Mask_Group_pp1p2q.png"
                  alt="profile"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div> */}
        <Header />

        <div className="superman-container">
          <div className="superman-image-container">
            <h1 className="superman-heading">Super Man</h1>
            <p className="superman-description">
              Superman is a fictional superhero who first <br />
              appeared in American comic books published by <br />
              DC Comics.
            </p>
            <button className="play-button" onClick={onHandleNavigate}>Play</button>
          </div>
        </div>
      </div>

      {/* Trending Movies */}


      
      <section className="trending-container">
        <div className="trending-header">
          <h1 className="trending-heading">Trending Now</h1>
          <div className="trending-movies-container">
            <Slider {...sliderSettings}>
              {trendingMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="trending-movie-item"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img
                    src={movie.backdropPath}
                    alt={movie.title}
                    className="trending-movie-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Originals */}
        <div className="trending-header">
          <h1 className="trending-heading">Originals</h1>
          <div className="trending-movies-container">
            <Slider {...sliderSettings}>
              {originalMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="trending-movie-item"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img
                    src={movie.backdropPath}
                    alt={movie.title}
                    className="trending-movie-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Footer */}
        {/* <footer className="footers-container">
          <div className="footer">
            <FaGoogle className="footer-iconn" />
            <FaTwitter className="footer-iconn" />
            <FaInstagram className="footer-iconn" />
            <FaYoutube className="footer-iconn" />
          </div>
          <p className="contact-uss">Contact Us</p>
        </footer> */}
        <Footer />
      </section>
      
    </>
  );
};

export default HomePage;
