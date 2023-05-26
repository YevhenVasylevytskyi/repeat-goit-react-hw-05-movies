import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import s from './MovieDetails.module.css';

const API_KEY = "fe0d397e19456f05f6bf4b38d9ef121b"



function MovieDetails() {

    const [res, setRes] = useState({});

    const { movieId } = useParams();

    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`

    useEffect(() => {
        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(result => {
                setRes(result)
                // console.log(result)
                return result;
            })
        
    }, [URL])
    console.log(res)   


    return (
        <>
            {res &&
                <div className={s.movie}>
                    <img alt="1" src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} />
                    <h2>{res.title}</h2>
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