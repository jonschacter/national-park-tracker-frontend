// react-redux 
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// css
import './App.css';

// actions
import { getCurrentUser } from './actions/currentUser.js'
import { getParks } from './actions/parks.js'

// components
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
        // on mount check for an existing user session & get park list from API
        this.props.getCurrentUser()
        this.props.getParks()
    }

    render(){
        return(
            <div className="App">
                <Router>
                    <div className="banner">
                        <h1 className="welcome-title">U.S. NATIONAL PARK TRACKER</h1>
                        <Navbar />
                    </div>
                    <div className="home-bg">
                        <div className="content">
                            <Switch>
                                <Route exact path="/" component={Welcome} />
                                <Route exact path="/login" render={(routerProps) => <UserForm {...routerProps} newUser={false} />} />
                                <Route exact path="/signup" render={(routerProps) => <UserForm {...routerProps} newUser={true} />} />
                                <Route exact path="/parks" component={ParksContainer} />
                                <Route exact path={`/parks/:id`} component={ParkShow} />
                                <Route exact path="/visits" component={Visits} />
                                <Route exact path="/visits/new" component={NewVisitFormContainer} />
                                <Route exact path={`/visits/:id/edit`} component={EditVisitFormContainer} />
                                <Route exact path={`/visits/:id`} component={VisitShow} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default connect(null, { getCurrentUser, getParks })(App)
