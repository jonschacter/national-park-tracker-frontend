import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Visit from './Visit.js'

const Visits = ({ visits, parks }) => {
    const renderVisits = () => {
        return <div className="list">
            {visits.map(visit => {
                return <Visit key={visit.id} visit={visit} park={parks.find(park => park.id === visit.park_id)}/>
            })}
        </div>

    }
    
    return(
        <div className="container">
            <h2>MY VISITS</h2>
            <Link to="/visits/new">Add a New Visit</Link>
            <br /><br />
            { visits.length > 0 ? renderVisits() : <h3>LOADING...</h3> }
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