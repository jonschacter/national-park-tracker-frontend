import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../../actions/reviews.js'

class ReviewForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            content: props.content,
            type: props.type,
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
            content: this.state.content
        }
        if (this.state.type === "New") {
            this.props.createReview(reviewData)
        } else {

        }
    }

    render(){
        return(
            <div>
                <h4>Add a Review</h4>
                <form id="review-form" onSubmit={this.handleSubmit}>
                    <textarea 
                        name="content" 
                        form="review-form" 
                        cols="50" rows="4" 
                        placeholder="Leave your thoughts here..."
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                    <br/>
                    <input type="submit" value="Submit Review" />
                </form>
            </div>
        )
    }
}

export default connect(null, { createReview })(ReviewForm)