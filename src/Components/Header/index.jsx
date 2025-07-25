import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const Header = () => {
  return (
    <>
      {/* Desktop Header */}
      <header className="home-header">
        <div className="home-logo-container">
          <Link to="/" >
            <img
              src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/react-js/coding-practices/moviesApp/moviesAppWebsiteLogo.png"
              alt="movies logo"
              className="movies-logo"
            />
          </Link>

          <nav className="home-header-links">
            <p className="nav-heading-elements">Home</p>
            <Link
              to="/PopularMovies"
              className="linking-underline nav-heading-elements"
            >
              Popular
            </Link>
          </nav>
        </div>

        <div className="home-header-icons">
          <Link to="/Search">
            <FaSearch className="search-icon" />
          </Link>
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
      </header>

      {/* Mobile Header */}
      <div className="home-header-show1">
        <div className="home-width">
          <div className="home-logo-container-show">
           <Link to="/" >
            <img
              src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/react-js/coding-practices/moviesApp/moviesAppWebsiteLogo.png"
              alt="movies logo"
              className="movies-logo"
            />
          </Link>
            <nav className="home-header-links-show">
              <Link to="/" className="linking-underline">
                Home
              </Link>
              <Link to="/PopularMovies" className="linking-underline">
                Popular
              </Link>
            </nav>
          </div>
          <div className="home-header-icons-show">
            <Link to="/Search" className="linking-underline">
              <FaSearch className="search-icon-show" />
            </Link>
            <Link to="/Account" className="linking-underline">
              <div className="profile-container">
                <img
                  src="https://res.cloudinary.com/dm1x64qdl/image/upload/v1747907021/Mask_Group_pp1p2q.png"
                  alt="profile"
                  className="profile-image"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
