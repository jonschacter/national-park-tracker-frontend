import React, { Component } from 'react'

class ReviewForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            content: props.content,
            type: props.type
        }
    }

    handleChange = event => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.type === "New") {

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

export default ReviewForm