import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Navbar = ({ loggedIn, logout, history }) => {
    return(
        <div>
            <Link to="/parks">Parks</Link>{ loggedIn ? <> | <Link to="/visits">My Visits</Link> | <Link onClick={ event => logout(history) }>Log Out</Link></> : null }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar))