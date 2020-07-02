import React from 'react'
import { connect } from 'react-redux'
import Parks from './Parks.js'

const ParksContainer = ({ parks }) => {
    return(
        <div>
            { parks.length > 0 ? <Parks parks={parks} /> : <h3>LOADING...</h3>}
        </div>
    )
}

const mapStateToProps = ({ parks }) => {
    return {
        parks
    }
}

export default connect(mapStateToProps)(ParksContainer)