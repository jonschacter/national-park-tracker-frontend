import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteVisit } from '../../actions/visits.js'
import { getReview } from '../../actions/reviews.js'
import ReviewCard from '../review/ReviewCard.js'
import ReviewForm from '../review/ReviewForm.js'

class VisitShow extends Component {
    state = {
        formToggle: false,
        editToggle: false
    }

    componentDidMount(){
        const { getReview, match } = this.props
        getReview(parseInt(match.params.id))
    }

    showForm = () => {
        this.setState({
            formToggle: true
        })
    }

    hideForm = () => {
        this.setState({
            formToggle: false
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }
    
    renderReviewForm = () => {
        if (this.state.formToggle) {
            return <ReviewForm type="New" content="" id="" visitId={this.props.visit.id} />
        } else {
            return <button className="button" onClick={this.showForm}>Write a Review</button>
        }
    }

    renderReview = () => {
        const { review, visit } = this.props
        if (this.state.editToggle) {
            return <ReviewForm type="Edit" id={review.id} content={review.content} visitId={visit.id} toggleEdit={this.toggleEdit} />
        } else {
            return <ReviewCard source="fromVisit" review={review} toggleEdit={this.toggleEdit} hideForm={this.hideForm} />
        }
    }
    
    renderVisit = () => {
        const { visit, history, deleteVisit } = this.props
        return(
            <>
                <p>Start Date: { visit ? visit.start_date : null }</p>
                <p>End Date: { visit ? visit.end_date : null }</p>
                <Link to={`/visits/${visit.id}/edit`}>Edit This Visit</Link>
                <br/>
                <Link onClick={() => deleteVisit(visit.id, history)}>Delete This Visit</Link>
                <br/>
                <br/>
            </>
        )
    }

    render(){
        const { visit, park, review } = this.props
        return(
            <div className="container">
                <h3>{ park ? <Link to={`/parks/${park.id}`} dangerouslySetInnerHTML={{__html: park.name}}></Link> : "Destination" }</h3>
                { visit ? this.renderVisit() : null }
                { review ? this.renderReview() : this.renderReviewForm() }
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

export default connect(mapStateToProps, { deleteVisit, getReview })(VisitShow)