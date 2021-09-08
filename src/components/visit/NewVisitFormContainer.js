// react-redux
import React from 'react'
import { connect } from 'react-redux'

// components
import VisitForm from './VisitForm.js'

const NewVisitFormContainer = ({ parks }) => {
    return(
        <div className="content-box visit-form-box">
            <h2 className="heading-h2">Create a Visit</h2>
            <VisitForm parks={parks} type="Create Visit" />
        </div>
    )
}

const mapStateToProps = ({ parks }) => {
    return {
        parks
    }
}

export default connect(mapStateToProps)(NewVisitFormContainer)