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
        <ul>
            {cast && cast.map(actor => {
                return <li key={actor.id}>
                    <p>{actor.name}</p>
                    {/* <img alt="1" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}/> */}
                </li>
            })}
        </ul>
    );
}

export default Cast;