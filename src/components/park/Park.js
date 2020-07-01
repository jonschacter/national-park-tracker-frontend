import React from 'react'
import { Link } from 'react-router-dom'

const Park = ({ name, states, parkCode }) => {
    return(
        <div className="park">
            <p><Link to={`/parks/${parkCode}`}>{name}</Link> - {states}</p>
        </div>
    )
}

export default Park