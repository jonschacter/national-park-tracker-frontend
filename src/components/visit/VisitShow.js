import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteVisit } from '../../actions/visits.js'
import { getReview } from '../../actions/reviews.js'
import ReviewCard from '../review/ReviewCard.js'
import ReviewForm from '../review/ReviewForm.js'

class VisitShow extends Component {
    state = {
        formToggle: false
    }

    componentDidMount(){
        this.props.getReview(parseInt(this.props.match.params.id))
    }

    toggleForm = () => {
        this.setState(prevState => {
            return{
                formToggle: !prevState.formToggle
            }
        })
    }
    
    render(){
        const { visit, park, history, deleteVisit, review } = this.props
        return(
            <div>
                <h3>{ park ? <Link to={`/parks/${park.id}`}>{park.name}</Link> : "Destination" }</h3>
                <p>Start Date: { visit ? visit.start_date : null }</p>
                <p>End Date: { visit ? visit.end_date : null }</p>
                { visit ? <Link to={`/visits/${visit.id}/edit`}>Edit This Visit</Link> : null }
                <br />
                { visit ? <Link onClick={event => deleteVisit(visit.id, history)}>Delete This Visit</Link> : null }
                <br /><br />
                { review ? <ReviewCard review={review} source={"fromVisit"}/> : null }
                { this.state.formToggle ? <ReviewForm type="New" content="" visitId={visit.id} /> : <button onClick={this.toggleForm}>Write a Review</button> }
            </div>
        )
    }
    
}

const mapStateToProps = ({ visits, parks, visitReview}, props) => {
    const visit = visits.find(visit => visit.id === parseInt(props.match.params.id))
    return {
        visit,
        park: visit ? parks.find(park => park.id === visit.park_id) : undefined,
        review: visitReview.id === "" ? null : visitReview
    }
}

export default connect(mapStateToProps, { deleteVisit, getReview })(VisitShow)