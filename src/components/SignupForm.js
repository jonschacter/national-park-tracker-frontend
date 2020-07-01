import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/currentUser.js'

class SignupForm extends Component {
    
    state = {
        username: "",
        password: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.signup(this.state, this.props.history)
        this.setState({
            username: "",
            password: ""
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                <br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                <br/>
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}

export default connect(null, { signup })(SignupForm)