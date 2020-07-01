import React from 'react'

const ParkImage = ({ image }) => {
    return(
        <div className="park-image">
            <img src={image.url} alt={image.altText}/>
            <p>{image.caption}</p>
        </div>
    )
}

export default ParkImage