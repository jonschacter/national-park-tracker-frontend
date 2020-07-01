import React from 'react'

const Visit = ({ visit, park }) => {
    return(
        <div className="visit">
            {park ? park.name : "destination"} - {visit.start_date}
        </div>
    )
}

export default Visit