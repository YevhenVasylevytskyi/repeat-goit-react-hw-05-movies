import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import Container from "./Container/Container";

import s from "./App.module.css"


export const App = () => {
  return (
    <Container>
      <nav className={s.nav}>
        <NavLink className={s.navLink} to="/">Home</NavLink>
        <NavLink className={s.navLink} to="/movies">Movies</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/movies/:movieId" element={<MovieDetails />} >  
          <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </div>
    </Container>
  );
};