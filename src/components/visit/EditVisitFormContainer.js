import React from 'react'
import { connect } from 'react-redux'
import EditVisitForm from './EditVisitForm.js'

const EditVisitFormContainer = ({ visit, parks }) => {
    return(
        <div>
            <h2>Edit Visit</h2>
            { visit && parks.length > 0 ? <EditVisitForm visit={visit} parks={parks} /> : null }
        </div>
    )
}

const mapStateToProps = ({ visits, parks }, props) => {
    const visit = visits.length > 0 ? visits.find(visit => visit.id === parseInt(props.match.params.id)) : null
    return {
        visit,
        parks
    }
}

export default connect(mapStateToProps)(EditVisitFormContainer)