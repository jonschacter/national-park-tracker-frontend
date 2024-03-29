// react-redux
import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { createReview } from '../../actions/reviews.js'
import { updateReview } from '../../actions/reviews.js'

class ReviewForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            content: props.content,
            id: props.id,
            visitId: props.visitId
        }
    }

    handleChange = event => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const reviewData = {
            visit_id: this.state.visitId,
            content: this.state.content,
        }
        const { newReview, createReview, updateReview, toggleForm } = this.props
        if (newReview) {
            createReview(reviewData)
            toggleForm()
        } else {
            updateReview(reviewData, this.state.id)
            toggleForm()
        }
    }

    render(){
        return(
            <div className="review-form-container">
                <h4>{this.props.newReview ? "Add a " : "Edit your " }Review</h4>
                <form id="review-form" onSubmit={this.handleSubmit}>
                    <textarea 
                        name="content" 
                        form="review-form" 
                        cols="50" rows="8" 
                        placeholder="Leave your thoughts here..."
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                    <input className="form-button" type="submit" value={this.props.newReview ? "Submit Review" : "Update Review"} />
                </form>
            </div>
        )
    }
}

export default connect(null, { createReview, updateReview })(ReviewForm)