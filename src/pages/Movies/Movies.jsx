import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from 'react-toastify';
import { fetchSearchMovies } from "services/MovieService";

import s from "./Movies.module.css";

function Movies() {

    const [searchMovie, setSearchMovie] = useState('');
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchSearchMovies(searchMovie)
            .then(response => {
                setMovies(response.results)
            })        
    }, [searchMovie])

    // console.log(movies)

    const handleChange = event => {
        setSearchMovie(event.currentTarget.value.toLowerCase())
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (searchMovie.trim() === "") {
            return toast.error("Введіть пошуковий запит");
        }
        // onSubmit(searchMovie);
        setSearchMovie('');
    }
    
    return (
        <>
            <form
                className={s.SearchForm}
              onSubmit={handleSubmit}
            >
                <button
                    type="submit"
                    className={s.SearchFormButton}
                >
                    <FiSearch className={s.SearchSvg} />
                </button>

                <input
                    className={s.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    value={searchMovie}
                    onChange={handleChange}
                />
            </form>
            <ul>
                {movies && movies.map(movie => {
                    return <li key={movie.id}>
                        {movie.title}
                    </li>
                })}                
            </ul>
        </>

        );
    }


export default Movies;