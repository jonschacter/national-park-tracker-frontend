import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const VisitShow = ({ visit, park }) => {
    return(
        <div>
            <h3>{ park ? <Link to={`/parks/${park.parkCode}`}>{park.name}</Link> : "Destination" }</h3>
            <p>Start Date: { visit ? visit.start_date : null }</p>
            <p>End Date: { visit ? visit.end_date : null }</p>
            { visit ? <Link to={`/visits/${visit.id}/edit`}>Edit This Visit</Link> : null }
            <br />
            { visit ? <Link>Delete This Visit</Link> : null }
        </div>
    )
}

const mapStateToProps = ({ visits, parks }, props) => {
    const visit = visits.find(visit => visit.id === parseInt(props.match.params.id))
    return {
        visit,
        park: parks.find(park => park.parkCode === visit.park_code)
    }
}

export default connect(mapStateToProps)(VisitShow)