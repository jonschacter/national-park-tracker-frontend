// react-redux
import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
    return(
        <Link to="/login"><button className="login__btn button">Log In</button></Link>
    )
}

export default LoginButton