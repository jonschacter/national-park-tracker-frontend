// react-redux
import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { login } from '../../actions/currentUser.js'
import { signup } from '../../actions/currentUser.js'

class UserForm extends Component {
    // props.type will be either "Log In" or "Sign Up"
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            type: props.type
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.type === "Log In") {
            this.props.login(this.state, this.props.history)
        } else {
            this.props.signup(this.state, this.props.history)
        }
        
        this.setState({
            username: "",
            password: ""
        })
    }
    
    // controlled form
    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                <br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                <br/>
                <div className="form-button">
                    <input className="button" type="submit" value={this.state.type} />
                </div>
            </form>
        )
    }
}

export default connect(null, { login, signup })(UserForm)