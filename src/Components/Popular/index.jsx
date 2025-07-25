import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import PopularMovies from "./PopularMovies";
import "./index.css";
import { RxCross2 } from "react-icons/rx";
import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";
import SomethingWentWrong from "../SomethingWentWrong";
import Footer from "../Footer";
import { ClipLoader } from "react-spinners";
import Header from "../Header";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/Login" />;
  }

  const renderLoading = () => (
    <div className="loading-view-container">
      <ClipLoader color="red" text-align="center" />
    </div>
  );

  useEffect(() => {
    const renderPopularMovies = async () => {
      try {
        const url = "https://apis.ccbp.in/movies-app/popular-movies";
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookies.get("jwt_token")}`,
          },
        };
        const response = await fetch(url, options);
        const data = await response.json();

        const filteredData = data.results.map((each) => ({
          id: each.id,
          title: each.title,
          backdropPath: each.backdrop_path,
          posterPath: each.poster_path,
          overview: each.overview,
        }));
        setPopularMovies(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    renderPopularMovies();
  }, []);

  return (
    <>
      <div className="home-background-color">
        {/* <div className="header-conatiner">
          <h1 className="logo-heading">MOVIES</h1>
          <div>
            <Link to="/Search" className="linking-underline">
              <FaSearch className="search-icon" />
            </Link>
            <img
              src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1747820863/add-to-queue_1_wzjrc4.png"
              className="hamburger-menu-icon"
            />
          </div>
        </div>
        <div className="home-header-show">
          <div className="home-width">
            <div className="home-logo-container-show">
              <h1 className="home-heading-show">MOVIES</h1>
              <div className="home-header-links-show">
                <Link to="/" className="linking-underline nav-elements-show">
                  Home
                </Link>
                <Link
                  to="/PopularMovies"
                  className="linking-underline nav-elements-show"
                >
                  Popular
                </Link>
              </div>
            </div>
            <div className="home-header-icons-show">
              <Link to="/Search" className="linking-underline">
                <FaSearch className="search-icon-show" />
              </Link>
              <Link to="/Account" className="linking-underline">
                <div className="profile-container">
                  <img
                    src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1747907021/Mask_Group_pp1p2q.png"
                    className="profile-image"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="header-item">
          <div className="header-item-conatainer">
            <Link to="/" className="linking-underline">
              <h1 className="popular-heading">Home</h1>
            </Link>
            <Link to="/PopularMovies" className="linking-underline">
              <h1 className="popular-heading">Popular</h1>
            </Link>
            <Link to="/Account" className="linking-underline">
              <h1 className="popular-heading">Account</h1>
            </Link>
          </div>

          <div>
            <div className="image-container-background">
              <RxCross2 className="cross-image" />
            </div>
          </div>
        </div> */} <Header />
        <div className="popularmovies-align-container">
          {isLoading
            ? renderLoading()
            : popularMovies.map((each) => (
                <PopularMovies key={each.id} movies={each} />
              ))}
        </div>

        {isError ? <SomethingWentWrong /> : <Footer />}
      </div>
    </>
  );
};

export default Popular;
