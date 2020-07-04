import React from 'react'
import { connect } from 'react-redux'
import LoginButton from './user/LoginButton.js'
import SignupButton from './user/SignupButton.js'

const Welcome = ({ loggedIn, history }) => {
    
    const redirectToParks = () => {
        history.push('/parks')
    }
    
    return (
        <div className="welcome">
            { loggedIn ? redirectToParks() : <p><LoginButton/> or <SignupButton/></p> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(Welcome)