import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createVisit } from '../../actions/visits.js'
import { updateVisit } from '../../actions/visits.js'

class VisitForm extends Component {
    constructor(props){
        super(props)

        if(props.type === "Create Visit"){
            this.state = {
                parkId: "",
                startDate: "",
                endDate: "",
            }
        } else {
            this.state = {
                parkId: props.visit.park_id,
                startDate: props.visit.start_date,
                endDate: props.visit.end_date,
                userId: props.visit.user_id,
                id: props.visit.id
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
        const { type, userId, createVisit, updateVisit, history } = this.props
        if(type === "Create Visit"){
            createVisit({
                ...this.state,
                userId
            }, history)
        } else {
            updateVisit(this.state, history)
        }
    }

    render(){
        const { parks, type } = this.props
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>Park:</label>
                    <select name="parkId" onChange={this.handleChange} value={this.state.parkId}>
                        { type === "Create Visit" ? <option disabled value=""> -- select a park -- </option> : null }
                        { parks.map(park => <option value={park.id}>{park.name}</option>) }
                    </select>
                    <br/>
                    <label>Start Date:</label>
                    <input type="text" placeholder="YYYY-MM-DD" name="startDate" onChange={this.handleChange} value={this.state.startDate} />
                    <br/>
                    <label>End Date:</label>
                    <input type="text" placeholder="YYYY-MM-DD" name="endDate" onChange={this.handleChange} value={this.state.endDate} />
                    <br/>
                    <div className="form-button">
                        <input type="submit" value={type} />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ parks, currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    return {
        parks,
        userId
    }
}

export default withRouter(connect(mapStateToProps, { createVisit, updateVisit })(VisitForm))