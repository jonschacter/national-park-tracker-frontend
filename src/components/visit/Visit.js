import React from 'react'
import { Link } from 'react-router-dom'

const Visit = ({ visit, park }) => {
    return(
        <div className="visit">
            <Link to={`/visits/${visit.id}`}>{park ? park.name : "Destination"} - {visit.start_date}</Link>
        </div>
    )
}

export default Visit