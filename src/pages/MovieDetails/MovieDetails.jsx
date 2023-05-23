import { useParams } from "react-router-dom";

// import s from './MovieDetails.module.css';

function MovieDetails() {

    const { movieId } = useParams();


    return (
        <>
            <p>MovieDetails</p>
            <p>{ movieId }</p>
        </>
    );
}

export default MovieDetails;