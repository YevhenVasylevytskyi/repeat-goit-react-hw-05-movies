import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";

import s from "./App.module.css"

export const App = () => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink className={s.navLink} to="/">Home</NavLink>
        <NavLink className={s.navLink} to="/movies">Movies</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/movies/:movieId" element={< MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={< Cast />} />
          <Route path="/movies/:movieId/reviews" element={ < Reviews /> } />
        </Routes>
      </div>
    </>
  );
};