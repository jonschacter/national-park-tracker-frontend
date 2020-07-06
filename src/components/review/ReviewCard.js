import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteReview } from '../../actions/reviews.js'

const ReviewCard = ({ review, source, toggleEdit, deleteReview, hideForm }) => {
    const handleDelete = () => {
        deleteReview(review.id)
        hideForm()
    }

    return(
        <div className="review-card">
            { source === "fromVisit" ? <h3>Your Review</h3> : <h3>{review.user.username}</h3> }
            <p className="review-content">{review.content}</p>
            <p className="review-date">{review.updated_at.split("T")[0]}</p>
            { source === "fromVisit" ? <><Link onClick={toggleEdit}>edit</Link> | <Link onClick={handleDelete}>delete</Link></> : null }
        </div>
    )
}

export default connect(null, { deleteReview })(ReviewCard)

