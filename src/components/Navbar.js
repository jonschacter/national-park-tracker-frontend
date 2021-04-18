// react-redux
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// actions
import { logout } from '../actions/currentUser.js'

const Navbar = ({ loggedIn, logout, history }) => {
    // if logged in : Parks | My Visits | Log Out
    // if logged out : Home | Parks
    return(
        <div className="navbar">
            { loggedIn ? null : <><Link to="/">Home</Link> | </> }
            <Link to="/parks">Parks</Link>
            { loggedIn ? <> | <Link to="/visits">My Visits</Link> | <Link onClick={ () => logout(history) }>Log Out</Link></> : null }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar))