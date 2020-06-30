import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm.js'
import Logout from './components/Logout.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

class App extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    render(){
        return(
            <div className="App">
                <LoginForm />
                <Logout />
            </div>
        )
    }
}

export default connect(null, { getCurrentUser })(App)
