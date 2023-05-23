import { useState, useEffect } from "react";

import s from './Home.module.css';


function Home() {
    const [res, setRes] = useState();

    const API_KEY = "fe0d397e19456f05f6bf4b38d9ef121b"

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

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
            <ul className={s.list}>
                {res && res.results.map(card => {
                    return (<>
                        {/* <img alt="1" src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} /> */}
                        <li key={card.id}>{card.title}</li>
                    </>
                    )
                })}
            </ul>
        </>
    );
}

export default Home;