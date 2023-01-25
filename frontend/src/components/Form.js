import React, { useState } from 'react';

function Form({newReviewSubmit, userID, selectedPark}) {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [favorite, isFavorite] = useState(false)

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value)
    }

    const handleFavoriteChange = (e) => {
        isFavorite = !favorite
    }

    function handleSubmit(event) {
        event.preventDefault();
     
        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: comment,
                rating: rating,
                favorite: favorite,
                park_id: selectedPark.id,
                user_id: userID,
            })
        })
        .then((r) => r.json())
        .then((newReview) => newReviewSubmit(newReview))
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                type="text"
                name="comment"
                onChange={handleCommentChange}
                value={comment}
            />
            <input
                type="integer"
                name="rating"
                onChange={handleRatingChange}
                value={rating}
            />
            <input
                type="checkbox"
                name="favorite"
                onChange={handleFavoriteChange}
                checked={favorite}
            />
            <button type="submit">Submit</button>
        </form>
    );




}

export default Form