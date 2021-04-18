// react-redux
import React from 'react'

const ParkImage = ({ image }) => {
    return(
        <div className="park-image">
            <img src={image.url} alt={image.alt}/>
            <p>{image.caption}</p>
        </div>
    )
}

export default ParkImage