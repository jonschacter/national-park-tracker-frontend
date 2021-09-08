// react-redux
import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { getReviews } from '../../actions/reviews.js'

// components
import ParkAddress from './ParkAddress.js'
import ParkImage from './ParkImage.js'
import ReviewCard from '../review/ReviewCard.js'

class ParkShow extends Component {

    // on mount: fetch reviews
    componentDidMount(){
        const { getReviews, match } = this.props
        getReviews(match.params.id)
    }

    componentWillUnmount(){
    }

    renderReviews = () => {
        return(
            <div className="park-reviews">
                <h2 className="heading-h2">REVIEWS</h2>
                { this.props.parkReviews.map(review => <><ReviewCard review={review} source="fromParks" /><br/></>) }
            </div>
        )
    }

    renderPark = () => {
        const { park, parkReviews } = this.props
        return(
            <>
                <h2 className="heading-h2" dangerouslySetInnerHTML={{__html: park.name}}></h2>
                { park.addresses.map((address, i) => <ParkAddress key={i} address={address} />)}
                <p className="park-description">{park.description}</p>
                {park.images.map((image, i) => <ParkImage key={i} image={image}/>)}
                { parkReviews.length > 0 ? this.renderReviews() : null }
            </>
        )
    }

    render(){
        return(
            <div className="content-box park-show-box">
                { this.props.park ? this.renderPark() : <h3>LOADING...</h3> }
            </div>
        )
    }
}    


const mapStateToProps = ({ parks, parkReviews }, { match }) => {
    return {
        park: parks.find(park => park.id === parseInt(match.params.id)),
        parkReviews
    }
}

export default connect(mapStateToProps, { getReviews })(ParkShow)