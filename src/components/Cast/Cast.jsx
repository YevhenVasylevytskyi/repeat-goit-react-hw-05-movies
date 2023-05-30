import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCastMovie } from "services/MovieService";
// import s from './Cast.module.css';

function Cast() {

    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        fetchCastMovie(movieId)
            .then(response => {
                setCast(response.cast)                
            })        
    }, [movieId])

    // console.log(cast)   

    return (
        <>
            <h2>Cast</h2>
            <ul>
                {cast && cast.map(actor => {
                    return <li key={actor.id}>
                        <p>{actor.name}</p>
                    </li>
                })}
            </ul>
        </>
    );
}

export default Cast;