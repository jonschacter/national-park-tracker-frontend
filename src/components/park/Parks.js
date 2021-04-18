// react-redux
import React, { Component } from 'react'

// components
import Park from './Park.js'

class Parks extends Component {
    constructor(props){
        super(props)
        
        // filteredParks defaults to all parks
        this.state = {
            filteredParks: props.parks,
            query: "",
            queryType: "Name"
        }
    }
  
    renderParks = () => {
        // render filtered sub-section of parks sorted by name
        return(
            this.state.filteredParks.sort((a,b) => {
                return (a.name < b.name) ? -1 : 1
            }).map(park => {
                return <Park key={park.id} park={park} />
            })
        )
    }

   
    handleSelectChange = (event) => {
        // filter parks on select change
        const query = this.state.query.toLowerCase()
        const result = this.state.queryType === "State" ? this.props.parks.filter(park => park.name.toLowerCase().includes(query)) : this.props.parks.filter(park => park.states.toLowerCase().includes(query))
        this.setState({
            queryType: event.target.value,
            filteredParks: result
        })
    }

    handleQueryChange = (event) => {
        // filter parks on query change
        const query = event.target.value.toLowerCase()
        const result = this.state.queryType === "Name" ? this.props.parks.filter(park => park.name.toLowerCase().includes(query)) : this.props.parks.filter(park => park.states.toLowerCase().includes(query))
        this.setState({
            query,
            filteredParks: result
        })
    }

    render(){
        return(
            <div className="container">
                <h2>PARKS</h2>
                <div className="list">
                    <form>
                        <input className="park-search" type="text" onChange={this.handleQueryChange} placeholder="search by name or state"/>
                        <select className="button" name="queryType" value={this.state.queryType} onChange={this.handleSelectChange}>
                            <option>Name</option>
                            <option>State</option>
                        </select>
                    </form>
                    {this.renderParks()}
                </div>
            </div>
        )
    }
}

export default Parks