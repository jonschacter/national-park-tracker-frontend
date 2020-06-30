import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import Login from './Login.js'

const Navbar = ({ loggedIn }) => {
    return(
        <div>
            { loggedIn ? <Logout/> : <Login/> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser
    }
}

export default connect(mapStateToProps)(Navbar)