// react-redux
import React from 'react'
import { Link } from 'react-router-dom'

const Park = ({ park: {id, name, states} }) => {
    return(
        <li className="park">
            <Link to={`/parks/${id}`} dangerouslySetInnerHTML={{__html: name}}></Link> - {states}
        </li>
    )
}

export default Park