// react-redux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import { createVisit } from '../../actions/visits.js'
import { updateVisit } from '../../actions/visits.js'

class VisitForm extends Component {
    // props.newVisit will be true for Create Visit and false for Update Visit
    constructor(props){
        super(props)
        const visit = props.visit

        if(props.newVisit){
            this.state = {
                parkId: "",
                startDate: "",
                endDate: "",
            }
        } else {
            this.state = {
                parkId: visit.park_id,
                startDate: visit.start_date,
                endDate: visit.end_date,
                userId: visit.user_id,
                id: visit.id
            }
        }
    }

    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { newVisit, userId, createVisit, updateVisit, history } = this.props
        if(newVisit){
            createVisit({
                ...this.state,
                userId
            }, history)
        } else {
            updateVisit(this.state, history)
        }
    }

    render(){
        const { parks, newVisit } = this.props
        return(
            <form className="visit-form form" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <label>Park:</label>
                    <select name="parkId" onChange={this.handleChange} value={this.state.parkId}>
                        { newVisit ? <option disabled value=""> -- select a park -- </option> : null }
                        { parks.sort((a,b) => {
                            return (a.name < b.name) ? -1 : 1
                        }).map(park => <option key={park.id} value={park.id} dangerouslySetInnerHTML={{__html: park.name}}></option>) }
                    </select>
                </div>
                <div className="form-row">        
                    <label>Start Date:</label>
                    <input type="text" placeholder="YYYY-MM-DD" name="startDate" onChange={this.handleChange} value={this.state.startDate} />
                </div>
                <div className="form-row">
                    <label>End Date:</label>
                    <input type="text" placeholder="YYYY-MM-DD" name="endDate" onChange={this.handleChange} value={this.state.endDate} />
                </div>
                <input className="form-button" type="submit" value={ newVisit ? "Create Visit" : "Update Visit" } />
            </form>
        )
    }
}

const mapStateToProps = ({ currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    return {
        userId
    }
}

export default withRouter(connect(mapStateToProps, { createVisit, updateVisit })(VisitForm))