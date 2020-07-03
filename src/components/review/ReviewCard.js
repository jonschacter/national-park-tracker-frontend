import React from 'react'

const ReviewCard = ({ review, source }) => {

    return(
        <div className="review-card">
            { source === "fromVisit" ? <h4>Your Review</h4> : <h4>{review.user.username}</h4> }
            <p>{review.content}</p>
            <p>{review.updated_at.split("T")[0]}</p>
        </div>
    )
}

export default ReviewCard

