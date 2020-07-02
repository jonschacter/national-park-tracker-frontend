// import React, { Component } from 'react'

// class VisitForm extends Component {
//     constructor(props){
//         super(props)

//         this.state = props.visit
//     }

//     handleChange = event => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }
    
//     render(){
//         const { type, parks, submitValue, handleSubmit } = this.props
//         return(
//             <form onSubmit={handleSubmit}>
//                 <label>Park:</label>
//                 <select name="park_code" onChange={this.handleChange} >
//                     { type === "new" ? <option disabled selected value=""> -- select a park -- </option> : null }
//                     { parks.map(park => {
//                         return <option value={park.parkCode}>{park.name}</option>
//                     })}
//                 </select>
//                 <br />
//                 <label>Start Date:</label>
//                 <input type="text" name="start_date" onChange={this.handleChange} />
//                 <br />
//                 <label>End Date:</label>
//                 <input type="text" name="end_date" onChange={this.handleChange} />
//                 <br />
//                 <input type="submit" value={submitValue} />
//             </form>
//         )
//     }
// }

// export default VisitForm