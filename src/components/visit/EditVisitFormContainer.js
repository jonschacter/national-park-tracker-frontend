// react-redux
import React from 'react'
import { connect } from 'react-redux'

// components
import VisitForm from './VisitForm.js'

const EditVisitFormContainer = ({ visit, parks }) => {
    return(
        <div className="content-box visit-form-box">
            <h2 className="heading-h2">Edit Visit</h2>
            { visit && parks.length > 0 ? <VisitForm visit={visit} parks={parks} type="Update Visit" /> : <h3>LOADING...</h3> }
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