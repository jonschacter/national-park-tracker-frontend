import React from 'react'
import { connect } from 'react-redux'
import ParkAddress from './ParkAddress.js'
import ParkImage from './ParkImage.js'

const ParkShow = ({ park }) => {
    const renderPark = () => {
        return(
            <div>
                <h2>{park.name}</h2>
                { park.addresses.map(address => {
                    return <ParkAddress address={address} />
                })}
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
        park: state.parks.find(park => park.id === parseInt(props.match.params.id))
    }
}

export default connect(mapStateToProps)(ParkShow)