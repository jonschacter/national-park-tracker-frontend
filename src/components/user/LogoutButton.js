import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUser.js'
import { withRouter } from 'react-router-dom'

const LogoutButton = ({ logout, history }) => {
    return(
        <button onClick={(event) => { logout(history) }}>Log Out</button>
    )
}

export default withRouter(connect(null, { logout })(LogoutButton))