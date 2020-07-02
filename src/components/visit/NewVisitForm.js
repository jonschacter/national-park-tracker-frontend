import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createVisit } from '../../actions/visits.js'

class NewVisitForm extends Component {
    state = {
        parkCode: "",
        startDate: "",
        endDate: ""
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createVisit({
            ...this.state,
            userId: this.props.userId
        }, this.props.history)
    }

    render(){
        return(
            <div>
                <h2>Create a Visit</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Park:</label>
                    <select name="parkCode" onChange={this.handleChange} value={this.state.parkCode}>
                        <option disabled selected value=""> -- select a park -- </option>
                        { this.props.parks.map(park => <option value={park.parkCode}>{park.name}</option>) }
                    </select>
                    <br/>
                    <label>Start Date:</label>
                    <input type="text" placeholder="YYYY-MM-DD" name="startDate" onChange={this.handleChange} value={this.state.startDate} />
                    <br/>
                    <label>End Date:</label>
                    <input type="text" placeholder="YYYY-MM-DD" name="endDate" onChange={this.handleChange} value={this.state.endDate} />
                    <br/>
                    <input type="submit" value="Create Visit" />
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

export default connect(mapStateToProps, { createVisit })(NewVisitForm)