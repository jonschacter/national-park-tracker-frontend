// react-redux
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Welcome = ({ loggedIn, history }) => {
    
    const redirectToParks = () => {
        history.push('/parks')
    }
    // logged in => redirect to /parks
    // logged out => display Login and Sign Up buttons
    return (
        <>  
            { loggedIn ? redirectToParks() : null }
            <div className="welcome-container">
                <div className="welcome-text">
                    A tool to learn about our countries parks, record your visits and leave reviews!
                </div>
            </div>

            <div className="user-btns__container">
                <Link to="/signup"><button className="signup__btn button">Sign Up</button></Link>
                <Link to="/login"><button className="login__btn button">Log In</button></Link>
            </div> 
        </>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(Welcome)