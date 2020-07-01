import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { getParks } from './actions/parks.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import LoginForm from './components/user/LoginForm.js'
import SignupForm from './components/user/SignupForm.js'
import Parks from './components/park/Parks.js'
import ParkShow from './components/park/ParkShow.js'
import Visits from './components/visit/Visits.js'

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
                    <Route exact path="/parks" component={Parks} />
                    <Route path={`/parks/:parkCode`} component={ParkShow} />
                    <Route exact path="/visits" component={Visits} />
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
