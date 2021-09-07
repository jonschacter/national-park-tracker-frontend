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
        <ul className="navbar">
            { loggedIn ? null : <Link className="navlink" to="/">Home</Link> }
            <li><Link className="navlink" to="/parks">Parks</Link></li>
            { loggedIn ? <>
                            <li><Link className="navlink" to="/visits">My Visits</Link></li>
                            <li><Link className="navlink" onClick={ () => logout(history) }>Log Out</Link></li>
                        </> : null }
        </ul>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar))