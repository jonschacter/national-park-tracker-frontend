import React, { Component } from 'react'
import { connect } from 'react-redux'
import VisitForm from './VisitForm.js'
import { createVisit } from '../../actions/visits.js'

class VisitFormContainer extends Component {
    state = {
        start_date: "",
        end_date: "",
        park_code: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmitNew = (event) => {
        event.preventDefault()
        this.props.createVisit({
            ...this.state,
            user_id: this.props.user_id
        }, this.props.history)
    }

    render(){
        return(
            <div>
                { this.props.type === "new" ? 
                    <VisitForm 
                        type="new"
                        submitValue="Create Visit"
                        parks={this.props.parks}
                        formData={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmitNew}
                    /> : null }
            </div>
        )
    }
}

const mapStateToProps = ({ parks, currentUser }) => {
    const user_id = currentUser ? currentUser.id : ""
    return {
        parks,
        user_id
    }
}

export default connect(mapStateToProps, { createVisit })(VisitFormContainer)