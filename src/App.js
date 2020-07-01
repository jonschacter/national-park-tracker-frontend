import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { getParks } from './actions/parks.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginForm from './components/LoginForm.js'
import SignupForm from './components/SignupForm.js'
import Navbar from './components/Navbar.js'
import Welcome from './components/Welcome.js'


class App extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
        this.props.getParks()
    }

    render(){
        return(
            <div className="App">
                <Router>
                    <Navbar />
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/signup" component={SignupForm} />
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser
    }
}

export default connect(mapStateToProps, { getCurrentUser, getParks })(App)
