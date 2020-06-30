import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser.js'

class LoginForm extends Component {
    
    state = {
        username: "",
        password: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.login(this.state)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
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
                <input type="submit" value="Log In" />
            </form>
        )
    }
}

export default connect(null, { login })(LoginForm)