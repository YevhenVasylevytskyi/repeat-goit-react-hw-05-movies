import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDetailsMovie } from "services/MovieService";

import s from './MovieDetails.module.css';

function MovieDetails() {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        fetchDetailsMovie(movieId)
            .then(response => {
                setMovie(response)
            })
        
    }, [movieId])
    // console.log(movie)   

    return (
        <>
            {movie &&
                <div className={s.movie}>
                    <img alt="1" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h2>{movie.title}</h2>
                </div>}
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
        </>
        
    );
}

export default MovieDetails;