import React from 'react'
import { connect } from 'react-redux'
import Visit from './Visit.js'

const Visits = ({ visits, parks }) => {
    const renderVisits = () => {
        return visits.map(visit => {
            return <Visit key={visit.id} visit={visit} park={parks.find(park => park.parkCode === visit.park_code)}/>
        })
    }
    
    return(
        <div className="visits-list">
            <h2>MY VISITS</h2>
            { visits.length > 0 ? renderVisits() : null }
        </div>
    )
}

const mapStateToProps = ({ visits, parks }) => {
    return {
        visits,
        parks
    }
}

export default connect(mapStateToProps)(Visits)