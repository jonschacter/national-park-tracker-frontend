import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
    return(
        <Link to="/login"><button className="button">Log In</button></Link>
    )
}

export default LoginButton