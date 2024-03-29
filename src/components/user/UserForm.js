// react-redux
import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { login } from '../../actions/currentUser.js'
import { signup } from '../../actions/currentUser.js'

class UserForm extends Component {
    // props.newUser will be false for Log In or true for Sign Up
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const { newUser, signup, login, history } = this.props
        if (newUser) {
            signup(this.state, history)
        } else {
            login(this.state, history)
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
            <div className="content-box user-form-box">
                <h2 className="heading-h2">{ this.props.newUser ? "Sign Up" : "Log In" }</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <label>Username:</label>
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                    </div>
                    <div className="form-row">
                        <label>Password:</label>
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <input className="form-button" type="submit" value={ this.props.newUser ? "Sign Up" : "Log In" } />
                </form>
            </div>
        )
    }
}

export default connect(null, { login, signup })(UserForm)