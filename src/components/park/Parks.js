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
        const queryType = event.target.value;
        const filteredParks = this.filterParks(query, queryType)
        this.setState({
            queryType,
            filteredParks
        })
    }

    handleQueryChange = (event) => {
        // filter parks on query change
        const query = event.target.value.toLowerCase()
        const filteredParks = this.filterParks(query, this.state.queryType)
        this.setState({
            query,
            filteredParks
        })
    }

    filterParks = (query, field) => {
        return field === "Name" ? this.props.parks.filter(park => park.name.toLowerCase().includes(query)) : this.props.parks.filter(park => park.states.toLowerCase().includes(query))
    }

    render(){
        return(
            <>
                <h2 className="heading heading-h2">PARKS</h2>
                <form>
                    <input className="park-search" type="text" onChange={this.handleQueryChange} placeholder="search by name or state"/>
                    <select className="filter-button" name="queryType" value={this.state.queryType} onChange={this.handleSelectChange}>
                        <option>Name</option>
                        <option>State</option>
                    </select>
                </form>
                <ul className="park-list">
                    {this.renderParks()}
                </ul>
            </>
        )
    }
}

export default Parks