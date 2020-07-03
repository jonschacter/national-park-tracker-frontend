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
            { source === "fromVisit" ? <h4>Your Review</h4> : <h4>{review.user.username}</h4> }
            <p>{review.content}</p>
            <p>{review.updated_at.split("T")[0]}</p>
            { source === "fromVisit" ? <><Link onClick={toggleEdit}>edit</Link> | <Link onClick={handleDelete}>delete</Link></> : null }
        </div>
    )
}

export default connect(null, { deleteReview })(ReviewCard)

