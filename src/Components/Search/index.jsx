import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";
import { Link } from "react-router";
import SearchRenderMovie from "./SearchRenderMovie";
import "./index.css";
import SomethingWentWrong from "../SomethingWentWrong";
import { ClipLoader } from "react-spinners";
import Header from "../Header";
import Footer from "../Footer";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderLoading = () => (
    <div className="loading-view-container">
      <ClipLoader color="red" text-align="center" />
    </div>
  );

  useEffect(() => {
    const filterMovies = async () => {
      try {
        const url =
          "https://apis.ccbp.in/movies-app/movies-search?search=" + searchTerm;
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer: ${Cookies.get("jwt_token")}`,
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        const filteredData = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          posterPath: movie.poster_path,
          releaseDate: movie.release_date,
        }));

        const filtered = filteredData.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filtered.length === 0) {
          setIsEmpty(true);
        }

        setSearchResults(filtered);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsError(true);
      }
    };

    filterMovies();
  }, [searchTerm]);

  return (
    <>
      <div className="search-background">
        <div className="header-conatiner1">
          <Link to="/" className="logo-container">
           <img
            src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/react-js/coding-practices/moviesApp/moviesAppWebsiteLogo.png"
            alt="movies logo"
            className="logo-heading"
          />
          </Link>
         
          <div className="nav-links-container1">
            <Link to="/" className="linking-underline">
              <p className="home">Home</p>
            </Link>
            <Link to="/PopularMovies" className="linking-underline">
              <p className="home">Popular</p>
            </Link>
          </div>
          <div className="seach-cont">
            <input
              type="search"
              value={searchTerm}
              placeholder="search"
              className="search-input"
              onChange={onChangeInput}
            />
            <img
              src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1747820863/add-to-queue_1_wzjrc4.png"
              className="hamburger-menu-icon"
            />
            <Link to="/Account" className="linking-underline">
              <CgProfile className="hamburger-menu-icon2" />
            </Link>
          </div>
        </div>
        {/* <Header /> */}
        <div className="search-movies-container">
          {isLoading && renderLoading()}

          {isEmpty ? (
            <div>
              <img
                src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1748319737/Group_7394_knvdpx.png"
                className="no-movies-found-image"
                alt="no movies found"
              />
              <p className="no-movies-found">
                Your Search for{" "}
                <span className="highlighting">{searchTerm}</span> did not find
                any matches.
              </p>
            </div>
          ) : (
            searchResults.map((eachMovie) => (
              <SearchRenderMovie key={eachMovie.id} movie={eachMovie} />
            ))
          )}
           
          {isError ? <SomethingWentWrong /> : null}
        </div>
         <Footer/>
      </div>
    </>
  );
};

export default Search;
