import React from 'react'
import { connect } from 'react-redux'
import LogoutButton from './user/LogoutButton.js'
import LoginButton from './user/LoginButton.js'
import SignupButton from './user/SignupButton.js'

const Welcome = ({ currentUser }) => {
    return (
        <div className="welcome">
            <h1>WELCOME TO US NATIONAL PARK TRACKER</h1>
            { currentUser ? <p><LogoutButton/></p> : <p><LoginButton/> or <SignupButton/></p> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Welcome)