import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateVisit } from '../../actions/visits.js'

class EditVisitForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            parkCode: props.visit.park_code,
            startDate: props.visit.start_date,
            endDate: props.visit.end_date,
            userId: props.visit.user_id,
            id: props.visit.id
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.updateVisit(this.state, this.props.history)
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Park:</label>
                    <select name="parkCode" value={this.state.parkCode} onChange={this.handleChange}>
                        { this.props.parks.map(park => <option value={park.parkCode}>{park.name}</option>)}
                    </select>
                    <br/>
                    <label>Start Date:</label>
                    <input type="text" name="startDate" value={this.state.startDate} onChange={this.handleChange} />
                    <br/>
                    <label>End Date:</label>
                    <input type="text" name="endDate" value={this.state.endDate} onChange={this.handleChange} />
                    <br/>
                    <input type="submit" value="Edit Visit" />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { updateVisit })(EditVisitForm))