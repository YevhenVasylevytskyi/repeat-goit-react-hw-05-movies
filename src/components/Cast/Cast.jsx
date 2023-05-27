import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import s from './Cast.module.css';

const API_KEY = "fe0d397e19456f05f6bf4b38d9ef121b"

function Cast() {

    const [res, setRes] = useState({});

    const { movieId } = useParams();

    const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`

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
        <ul>
            {res.length && res.cast.map(actor => {
                return <li key={actor.id}>
                    <p>{actor.name}</p>
                    {/* <img alt="1" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}/> */}
                </li>
            })}
        </ul>
    );
}

export default Cast;