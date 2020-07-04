import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { getParks } from './actions/parks.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import UserForm from './components/user/UserForm.js'
import ParksContainer from './components/park/ParksContainer.js'
import ParkShow from './components/park/ParkShow.js'
import Visits from './components/visit/Visits.js'
import NewVisitFormContainer from './components/visit/NewVisitFormContainer.js'
import EditVisitFormContainer from './components/visit/EditVisitFormContainer.js'
import VisitShow from './components/visit/VisitShow.js'

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
                    <h1>WELCOME TO US NATIONAL PARK TRACKER</h1>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/login" render={(routerProps) => <UserForm {...routerProps} type="Log In" />} />
                        <Route exact path="/signup" render={(routerProps) => <UserForm {...routerProps} type="Sign Up" />} />
                        <Route exact path="/parks" component={ParksContainer} />
                        <Route exact path={`/parks/:id`} component={ParkShow} />
                        <Route exact path="/visits" component={Visits} />
                        <Route exact path="/visits/new" component={NewVisitFormContainer} />
                        <Route exact path={`/visits/:id/edit`} component={EditVisitFormContainer} />
                        <Route exact path={`/visits/:id`} component={VisitShow} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default connect(null, { getCurrentUser, getParks })(App)
