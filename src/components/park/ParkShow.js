import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReviews } from '../../actions/parkReviews.js'
import ParkAddress from './ParkAddress.js'
import ParkImage from './ParkImage.js'
import ReviewCard from '../review/ReviewCard.js'

class ParkShow extends Component {

    componentDidMount(){
        this.props.getReviews(this.props.match.params.id)
    }

    renderReviews = () => {
        return(
            <div className="park-reviews">
                <h3>REVIEWS</h3>
                { this.props.parkReviews.map(review => <><ReviewCard review={review} /><br/></>) }
            </div>
        )
    }

    renderPark = () => {
        const { park, parkReviews } = this.props
        return(
            <div>
                <h2>{park.name}</h2>
                { park.addresses.map(address => {
                    return <ParkAddress address={address} />
                })}
                <p>{park.description}</p>
                {park.images.map((image, i) => <ParkImage key={i} image={image}/>)}
                { parkReviews.length > 0 ? this.renderReviews() : null }
            </div>
        )
    }

    render(){
        return(
            <>{ this.props.park ? this.renderPark() : null }</>
        )
    }
}    


const mapStateToProps = ({ parks, parkReviews }, props) => {
    return {
        park: parks.find(park => park.id === parseInt(props.match.params.id)),
        parkReviews
    }
}

export default connect(mapStateToProps, { getReviews })(ParkShow)