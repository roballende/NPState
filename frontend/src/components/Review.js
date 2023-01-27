import React, { useState } from "react"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"

function Review({ userID, username, selectedPark, review, handleReviewDelete, handleReviewUpdate }) {
    const [newRating, setNewRating] = useState(0)
    const [comment, setComment] = useState(review.comment)
    const [editing, setEditing] = useState(false)
    const [hover, setHover] = useState(0)

    const handleDelete = () => {
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE",
        })
            .then((resp) => resp.json())
            .then(handleReviewDelete(review))
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handleRatingChange = (e) => {
        setNewRating(e)
    }

    const handleStarHover = (e) => {
        setHover(e)
    }

    function handleUpdate(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating: newRating,
                comment: comment,
                park_id: selectedPark.id,
                user_id: userID,
            }),
        })
            .then((r) => r.json())
            .then((updatedReview) => {
                handleReviewUpdate(updatedReview)
                setEditing(false)
                // reset the reviews div
            })
    }

    let starRating
    if (review.rating === 1) {
        starRating = (
            <div className='star'>
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
            </div>
        )
    } else if (review.rating === 2) {
        starRating = (
            <div className='star'>
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
            </div>
        )
    } else if (review.rating === 3) {
        starRating = (
            <div className='star'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
            </div>
        )
    } else if (review.rating === 4) {
        starRating = (
            <div className='star'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
            </div>
        )
    } else if (review.rating === 5) {
        starRating = (
            <div className='star'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
        )
    } else {
        starRating = (
            <div className='star'>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
            </div>
        )
    }

    return (
        <div className='review'>
            <div className="user">{review.user.name}</div>
            {editing && review.user.name === username ? (
                <div>
                    <textarea type='text' name='comment' onChange={handleCommentChange} value={comment} />
                    <div onMouseLeave={() => handleStarHover(0)}>
                        <p onClick={() => handleRatingChange(1)} onMouseEnter={() => handleStarHover(1)} className='star'>
                            {newRating >= 1 || hover >= 1 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                        <p onClick={() => handleRatingChange(2)} onMouseEnter={() => handleStarHover(2)} className='star'>
                            {newRating >= 2 || hover >= 2 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                        <p onClick={() => handleRatingChange(3)} onMouseEnter={() => handleStarHover(3)} className='star'>
                            {newRating >= 3 || hover >= 3 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                        <p onClick={() => handleRatingChange(4)} onMouseEnter={() => handleStarHover(4)} className='star'>
                            {newRating >= 4 || hover >= 4 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                        <p onClick={() => handleRatingChange(5)} onMouseEnter={() => handleStarHover(5)} className='star'>
                            {newRating >= 5 || hover >= 5 ? <StarIcon /> : <StarBorderIcon />}
                        </p>
                    </div>
                    <DeleteOutlineIcon onClick={handleDelete} />
                    <button onClick={handleUpdate}>Save</button>
                </div>
            ) : (
                <div>
                    <div>"{review.comment}"</div>
                    <div>{starRating}</div>
                    {/* <CreateOutlinedIcon onClick={() => setEditing(!editing)} />  */}
                    {review.user.name === username ? <CreateOutlinedIcon onClick={() => setEditing(!editing)} /> : <div></div>}
                </div>
            )}
            <br></br>
        </div>
    )
}

export default Review
