import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ loggedIn }) => {
    return(
        <div>
            <Link to="/">Home</Link> | <Link to="/parks">Parks</Link>{ loggedIn ? <> | <Link>My Visits</Link> | <Link>Log Out</Link></> : null }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser
    }
}

export default connect(mapStateToProps)(Navbar)