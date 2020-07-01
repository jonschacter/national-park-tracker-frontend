import React from 'react'
import { Link } from 'react-router-dom'

const Park = ({ name, states, parkCode }) => {
    return(
        <div className="park">
            <li><Link to={`/parks/${parkCode}`}>{name}</Link> - {states}</li>
        </div>
    )
}

export default Park