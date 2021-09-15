// react-redux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// actions
import { deleteVisit } from '../../actions/visits.js'
import { getReview, resetReview } from '../../actions/reviews.js'

// components
import ReviewCard from '../review/ReviewCard.js'
import ReviewForm from '../review/ReviewForm.js'

class VisitShow extends Component {
    state = {
        reviewFormDisplay: false,
    }

    componentDidMount(){
        // on mount check for existing review
        const { getReview, resetReview, match } = this.props
        resetReview()
        getReview(parseInt(match.params.id))
    }

    toggleReviewForm = () => {
        this.setState(prevState => ({
            reviewFormDisplay: !prevState.reviewFormDisplay
        }))
    }

    renderReview = () => {
        const { review, visit } = this.props

        if (review) {
            // with existing review: 
            // Edit Review Form or Review Card
            return (
                <>
                    { this.state.reviewFormDisplay ? <ReviewForm newReview={false} id={review.id} content={review.content} visitId={visit.id} toggleForm={this.toggleReviewForm} /> : <ReviewCard fromParks={false} review={review} toggleForm={this.toggleReviewForm} /> }
                </>
            )
        } else {
            // without existing review:
            // New Review Form or Create Review Button
            return (
                <>
                    { this.state.reviewFormDisplay ? <ReviewForm newReview={true} id="" content="" visitId={visit.id} toggleForm={this.toggleReviewForm} /> : <button className="form-button" onClick={this.toggleReviewForm}>Write a Review</button> }
                </>
            )
        }
    }
    
    renderVisit = () => {
        const { visit, history, deleteVisit } = this.props
        return(
            <div>
                <p className="visit-date">Start Date: { visit.start_date }</p>
                <p className="visit-date">End Date: { visit.end_date }</p>
                <Link to={`/visits/${visit.id}/edit`}>Edit This Visit</Link>
                <br/>
                <Link onClick={() => deleteVisit(visit.id, history)}>Delete This Visit</Link>
            </div>
        )
    }

    render(){
        const { visit, park } = this.props
        return(
            <div className="content-box visit-box">
                <h3>{ park ? <Link to={`/parks/${park.id}`} dangerouslySetInnerHTML={{__html: park.name}}></Link> : "Destination" }</h3>
                { visit ? this.renderVisit() : null }
                {this.renderReview()}
            </div>
        )
    }
    
}

const mapStateToProps = ({ visits, parks, visitReview }, { match }) => {
    const visit = visits.find(visit => visit.id === parseInt(match.params.id))
    return {
        visit,
        park: visit ? parks.find(park => park.id === visit.park_id) : null,
        review: visitReview.id === "" ? null : visitReview
    }
}

export default connect(mapStateToProps, { deleteVisit, getReview, resetReview })(VisitShow)