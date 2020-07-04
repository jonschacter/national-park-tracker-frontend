import React from 'react'
import { connect } from 'react-redux'
import LogoutButton from './user/LogoutButton.js'
import LoginButton from './user/LoginButton.js'
import SignupButton from './user/SignupButton.js'

const Welcome = ({ currentUser, history }) => {
    const redirectToParks = () => {
        history.push('/parks')
    }
    
    return (
        <div className="welcome">
            { currentUser ? redirectToParks() : <p><LoginButton/> or <SignupButton/></p> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Welcome)