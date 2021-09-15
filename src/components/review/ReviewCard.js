// react-redux
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// actions
import { deleteReview } from '../../actions/reviews.js'

// fromParks will be true if source is the Park Show page, false if from Visit Show page
const ReviewCard = ({ review: {id, user, content, updated_at}, fromParks, toggleForm, deleteReview }) => {
    const handleDelete = () => {
        deleteReview(id)
    }

    // only show edit/delete options when source = "fromVisit"
    return(
        <div className="review-card">
            <h3>{ fromParks ? user.username : "Your Review"}</h3>
            <p className="review-content">{content}</p>
            <p className="review-date">{updated_at.split("T")[0]}</p>
            { fromParks ? null : <><Link onClick={toggleForm}>edit</Link> | <Link onClick={handleDelete}>delete</Link></> }
        </div>
    )
}

export default connect(null, { deleteReview })(ReviewCard)

