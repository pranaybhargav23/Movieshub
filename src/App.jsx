import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import Popular from "./Components/Popular";
import Avengers from "./Components/MovieItem/index.jsx";
import Account from "./Components/Account";
import Search from "./Components/Search";
import NotFound from "./Components/NotFound";
import YouTubeEmbed from "./Components/MovieDetailsItem";
import ProtectedRoute from "./Components/ProtectedRoutes/index.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import YoutubeVideo from "./Components/YoutubeTrailers/index.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PopularMovies"
            element={
              <ProtectedRoute>
                <Popular />
              </ProtectedRoute>
            }
          />

          <Route
            path="/movies-app/movies/:movieId"
            element={
              <ProtectedRoute>
                <Avengers />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />

          <Route
            path="/trailer/:ids"
            element={
              <ProtectedRoute>
                <YouTubeEmbed />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trailers"
            element={
              <ProtectedRoute>
                <YoutubeVideo videoId="T6DJcgm3wNY" />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
