// react-redux
import React from 'react'
import { Link } from 'react-router-dom'

const Park = ({ park }) => {
    return(
        <li className="park">
            <Link to={`/parks/${park.id}`} dangerouslySetInnerHTML={{__html: park.name}}></Link> - {park.states}
        </li>
    )
}

export default Park