// react-redux
import React from 'react'

const ParkAddress = ({ address }) => {
    return(
        <div className="park-address">
            <p>{address.line1}</p>
            { address.line2 === "" ? null : <p>{address.line2}</p>}
            { address.line3 === "" ? null : <p>{address.line2}</p>}
            <p>{address.city}, {address.state} {address.postal}</p>
        </div>
    )
}

export default ParkAddress