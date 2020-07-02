import React, { Component } from 'react'
import Park from './Park.js'

class Parks extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            filteredParks: props.parks,
            query: ""
        }
    }
  
    renderParks = () => {
        return(
            this.state.filteredParks.map(park => {
                return <Park key={park.id} name={park.name} parkCode={park.parkCode} states={park.states} />
            })
        )
    }

    handleChange = (event) => {
        const query = event.target.value.toLowerCase()
        this.setState({
            query,
            filteredParks: this.props.parks.filter(
                park => park.name.toLowerCase().includes(query) ||
                park.addresses.find(add => add.type === "Physical").stateCode.toLowerCase().includes(query)
            )
        })
    }

    render(){
        const { parks } = this.props
        return(
            <div>
                <h2>PARKS</h2>
                { parks.length > 0 ? <div className="parks-list">
                    <form>
                        <input type="text" onChange={this.handleChange} placeholder="search by name or state"/>
                        <input type="submit" value="Search" />
                    </form>
                    {this.renderParks()}
                </div> : <h3>LOADING...</h3> }
            </div>
        )
    }
}

export default Parks