import React, { useState } from "react"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"

function Form({ newReviewSubmit, userID, selectedPark }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [comment, setComment] = useState("")

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handleRatingChange = (e) => {
        setRating(e)
    }

    const handleStarHover = (e) => {
        setHover(e)
    }

    function handleSubmit(event) {
        event.preventDefault()

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: comment,
                rating: rating,
                park_id: selectedPark.id,
                user_id: userID,
            }),
        })
            .then((r) => r.json())
            .then((newReview) => {
                newReviewSubmit(newReview)
                setRating(0)
                setComment("")
            })
    }

    return (
        <div className='review-form'>
            <h1>REVIEW THIS PARK</h1>
            <form onSubmit={handleSubmit}>
                <textarea className='input-item' type='text' name='comment' onChange={handleCommentChange} value={comment} />
                    <div className='rating-submit' onMouseLeave={() => handleStarHover(0)}>
                        <p onClick={() => handleRatingChange(1)} onMouseEnter={() => handleStarHover(1)} className='star'>
                            {rating >= 1 || hover >= 1 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                        <p onClick={() => handleRatingChange(2)} onMouseEnter={() => handleStarHover(2)} className='star'>
                            {rating >= 2 || hover >= 2 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                        <p onClick={() => handleRatingChange(3)} onMouseEnter={() => handleStarHover(3)} className='star'>
                            {rating >= 3 || hover >= 3 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                        <p onClick={() => handleRatingChange(4)} onMouseEnter={() => handleStarHover(4)} className='star'>
                            {rating >= 4 || hover >= 4 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                        <p onClick={() => handleRatingChange(5)} onMouseEnter={() => handleStarHover(5)} className='star'>
                            {rating >= 5 || hover >= 5 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                    </div>
                    <div className='rating-submit'>
                        <button type='submit' className='submit-button'>
                            Submit
                        </button>
                    </div>
            </form>
        </div>
    )
}

export default Form
