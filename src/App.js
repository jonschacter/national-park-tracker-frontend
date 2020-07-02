import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { getParks } from './actions/parks.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import LoginForm from './components/user/LoginForm.js'
import SignupForm from './components/user/SignupForm.js'
import Parks from './components/park/Parks.js'
import ParkShow from './components/park/ParkShow.js'
import Visits from './components/visit/Visits.js'
import VisitShow from './components/visit/VisitShow.js'
import NewVisitForm from './components/visit/NewVisitForm.js'
import EditVisitFormContainer from './components/visit/EditVisitFormContainer.js'

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
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/login" component={LoginForm} />
                        <Route exact path="/signup" component={SignupForm} />
                        <Route exact path="/parks" component={Parks} />
                        <Route exact path={`/parks/:parkCode`} component={ParkShow} />
                        <Route exact path="/visits" component={Visits} />
                        <Route exact path="/visits/new" component={NewVisitForm} />
                        <Route exact path={`/visits/:id/edit`} component={EditVisitFormContainer} />
                        <Route exact path={`/visits/:id`} component={VisitShow} />
                    </Switch>
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
