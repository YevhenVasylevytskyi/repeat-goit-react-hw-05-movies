import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsMovie } from "services/MovieService";

// import s from './Reviews.module.css';

function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsMovie(movieId)
      .then(response => {
        setReview(response.results)                
    })        
  }, [movieId])

    // console.log(review)   

  return (
    <>
      <h2>Revievs</h2>
      <ul>
        {review && review.map(comment => {
          return <li key={comment.id}>
            <h2>{comment.author}</h2>
            <p>{comment.content}</p>
                        
          </li>
        })}
      </ul>
    </>
    );
}

export default Reviews;