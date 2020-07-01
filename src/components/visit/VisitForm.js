import React from 'react'

const VisitForm = (props) => {
    return(
        <div>
            <h2>{ props.type === "new" ? "Create a New Visit" : null }</h2>
            <form onSubmit={props.handleSubmit}>
                <label>Park:</label>
                <select name="park_code" value={props.formData.park_code} onChange={props.handleChange}>
                    { props.type === "new" ? <option disabled selected value=""> -- select a park -- </option> : null}
                    { props.parks.map(park => {
                        return <option value={park.parkCode}>{park.name}</option>
                    })}
                </select>
                <br/>
                <label>Start Date:</label>
                <input type="text" name="start_date" value={props.formData.start_date} onChange={props.handleChange} />
                <br/>
                <label>End Date:</label>
                <input type="text" name="end_date" value={props.formData.end_date} onChange={props.handleChange} />
                <br/>
                <input type="submit" value={props.submitValue} />
            </form>
        </div>
    )
}

export default VisitForm