// react-redux
import React from 'react'

const ParkImage = ({ image: {url, alt, caption} }) => {
    return(
        <div className="park-image">
            <img src={url} alt={alt}/>
            <p>{caption}</p>
        </div>
    )
}

export default ParkImage