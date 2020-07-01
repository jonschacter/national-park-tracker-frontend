import React from 'react'
import { connect } from 'react-redux'
import { render } from '@testing-library/react'
import ParkAddress from './ParkAddress.js'
import ParkImage from './ParkImage.js'

const ParkShow = ({ park }) => {
    const renderPark = () => {
        return(
            <div>
                <h2>{park.name}</h2>
                <ParkAddress address={park.addresses.find(address => address.type === "Physical")} />
                <p>{park.description}</p>
                {park.images.map((image, i) => <ParkImage key={i} image={image}/>)}
            </div>
        )
    }

    return(
        <>{ park ? renderPark() : null }</>
    )
}

const mapStateToProps = (state, props) => {
    return {
        park: state.parks.find(park => park.parkCode === props.match.params.parkCode)
    }
}

export default connect(mapStateToProps)(ParkShow)