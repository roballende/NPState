import React, { useState } from "react"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'

function Review({ userID, username, selectedPark, review, handleReviewDelete, handleReviewUpdate }) {
    const [rating, setRating] = useState(review.rating)
    const [comment, setComment] = useState(review.comment)
    const [editing, setEditing] = useState(false)
    
    const handleDelete = () => {
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: 'DELETE',
        })
            .then((resp) => resp.json())
            .then(handleReviewDelete(review))
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handleRatingChange = (rating) => {
        setRating(rating)
    }

    function handleUpdate(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/reviews/${review.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating: rating,
            comment: comment,
            park_id: selectedPark.id,
            user_id: userID,
          }),
        })
          .then((r) => r.json())
          .then((updatedReview) => {
            handleReviewUpdate(updatedReview)
            setEditing(false)
        })
      }

    let starRating;
    if (review.rating === 1) {
        starRating = <div className="star"><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
    } else if (review.rating === 2) {
        starRating = <div className="star"><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
    } else if (review.rating === 3) {
        starRating = <div className="star"><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></div>
    } else if (review.rating === 4) {
        starRating = <div className="star"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></div>
    } else if (review.rating === 5) {
        starRating = <div className="star"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
    } else {
        starRating = <div className="star"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
    }

    return (
        <div>
            <div>User: {review.user.name}</div>
            {editing && review.user.name === username ? (
                <div>
                    <textarea
                        type="text"
                        name="comment"
                        onChange={handleCommentChange}
                        value={comment}
                    />
                    <div >
                        <div onClick={() => handleRatingChange(1)} className="star">{rating >= 1 ? <StarIcon /> : <StarBorderIcon />}</div>
                        <div onClick={() => handleRatingChange(2)} className="star">{rating >= 2 ? <StarIcon /> : <StarBorderIcon />}</div>
                        <div onClick={() => handleRatingChange(3)} className="star">{rating >= 3 ? <StarIcon /> : <StarBorderIcon />}</div>
                        <div onClick={() => handleRatingChange(4)} className="star">{rating >= 4 ? <StarIcon /> : <StarBorderIcon />}</div>
                        <div onClick={() => handleRatingChange(5)} className="star">{rating >= 5 ? <StarIcon /> : <StarBorderIcon />}</div>
                    </div>
                    <DeleteOutlineIcon onClick={handleDelete} />
                    <button onClick={handleUpdate}>Save</button>
                </div>
            ) : (
                <div>
                    <div>Comment: {review.comment} </div>
                    <div>Rating: {starRating}</div>
                    <CreateOutlinedIcon onClick={() => setEditing(!editing)}/>
                </div>
            )}
            <br></br>
        </div>
    )
}

export default Review
