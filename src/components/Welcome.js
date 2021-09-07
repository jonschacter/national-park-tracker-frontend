// react-redux
import React from 'react'
import { connect } from 'react-redux'

// components
import LoginButton from './user/LoginButton.js'
import SignupButton from './user/SignupButton.js'

const Welcome = ({ loggedIn, history }) => {
    
    const redirectToParks = () => {
        history.push('/parks')
    }
    // logged in => redirect to /parks
    // logged out => display Login and Sign Up buttons
    return (
        <div className="home-bg">
            <div className="content">
                <div className="welcome-container">
                    <div className="welcome-text">
                        A tool to learn about our countries parks, log visits and leave reviews!
                    </div>
                </div>

                { loggedIn ? redirectToParks() : <div className="user-btns__container"><SignupButton/><LoginButton/></div> }
            </div>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(Welcome)