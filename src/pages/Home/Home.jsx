import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPopularMovies } from "services/MovieService";

import s from './Home.module.css';


function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies()
            .then(response => {
                setMovies(response.results)
            })        
    }, [])
    // console.log(movies)    

    return (
        <>
            <ul className={s.list}>
                {movies && movies.map(card => {
                    return (
                        /* <img alt="1" src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} /> */
                        <li key={card.id}>
                            <Link to={`movies/${card.id}`}>{card.title}</Link>
                        </li>
                    
                    )
                })}
            </ul>
        </>
    );
}

export default Home;