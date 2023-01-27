import React from "react"
import Review from "./Review"

function Reviews({ userID, username, selectedPark, parkReviews, handleReviewDelete, handleReviewUpdate }) {

    // const reviews = Object.values(parkReviews)
    let reviews = []
    reviews = parkReviews

    return (
        <div>
            <h1>User Reviews</h1>
            <div className='review-container'>
                {reviews.map((review) => (
                    <Review key={review.id} review={review} handleReviewDelete={handleReviewDelete} handleReviewUpdate={handleReviewUpdate} userID={userID} selectedPark={selectedPark} username={username} />
                ))}
            </div>
        </div>
    )
}

export default Reviews