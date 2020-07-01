import React from 'react'
import { connect } from 'react-redux'
import Park from './Park.js'

const Parks = ({ parks }) => {
    const renderParks = () => {
        return(
            parks.map(park => {
                return <Park key={park.id} name={park.name} parkCode={park.parkCode} states={park.states} />
            })
        )
    }

    return(
        <div>
            <h2>PARKS</h2>
            { parks.length > 0 ? <ul className="parks-list">{renderParks()}</ul> : <h3>LOADING...</h3> }
        </div>
    )
}

const mapStateToProps = ({ parks }) => {
    return {
        parks
    }
}

export default connect(mapStateToProps)(Parks)