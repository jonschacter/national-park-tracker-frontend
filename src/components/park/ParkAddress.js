// react-redux
import React from 'react'

const ParkAddress = ({ address }) => {
    return(
        <ul className="park-address">
            <li>{address.line1}</li>
            { address.line2 === "" ? null : <li>{address.line2}</li>}
            { address.line3 === "" ? null : <li>{address.line2}</li>}
            <li>{address.city}, {address.state} {address.postal}</li>
        </ul>
    )
}

export default ParkAddress