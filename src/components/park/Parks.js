import React, { Component } from 'react'
import Park from './Park.js'

class Parks extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            filteredParks: props.parks,
            query: "",
            queryType: "Name"
        }
    }
  
    renderParks = () => {
        return(
            this.state.filteredParks.sort((a,b) => {
                return (a.name < b.name) ? -1 : 1
            }).map(park => {
                return <Park key={park.id} park={park} />
            })
        )
    }

    handleSelectChange = (event) => {
        const query = this.state.query.toLowerCase()
        const result = this.state.queryType === "State" ? this.props.parks.filter(park => park.name.toLowerCase().includes(query)) : this.props.parks.filter(park => park.states.toLowerCase().includes(query))
        this.setState({
            queryType: event.target.value,
            filteredParks: result
        })
    }

    handleQueryChange = (event) => {
        const query = event.target.value.toLowerCase()
        const result = this.state.queryType === "Name" ? this.props.parks.filter(park => park.name.toLowerCase().includes(query)) : this.props.parks.filter(park => park.states.toLowerCase().includes(query))
        this.setState({
            query,
            filteredParks: result
        })
    }

    render(){
        return(
            <div>
                <h2>PARKS</h2>
                <div className="parks-list">
                    <form>
                        <input type="text" onChange={this.handleQueryChange} placeholder="search by name or state"/>
                        <select name="queryType" value={this.state.queryType} onChange={this.handleSelectChange}>
                            <option>Name</option>
                            <option>State</option>
                        </select>
                        {/* <input type="submit" value="Search" /> */}
                    </form>
                    {this.renderParks()}
                </div>
            </div>
        )
    }
}

export default Parks