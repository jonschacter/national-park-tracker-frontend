// react-redux
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// actions
import { deleteReview } from '../../actions/reviews.js'

// source will be either "fromVisit" or "fromParks"
const ReviewCard = ({ review, source, toggleForm, deleteReview, hideForm }) => {
    const handleDelete = () => {
        deleteReview(review.id)
    }

    // only show edit/delete options when source = "fromVisit"
    return(
        <div className="review-card">
            { source === "fromVisit" ? <h3>Your Review</h3> : <h3>{review.user.username}</h3> }
            <p className="review-content">{review.content}</p>
            <p className="review-date">{review.updated_at.split("T")[0]}</p>
            { source === "fromVisit" ? <><Link onClick={toggleForm}>edit</Link> | <Link onClick={handleDelete}>delete</Link></> : null }
        </div>
    )
}

export default connect(null, { deleteReview })(ReviewCard)

