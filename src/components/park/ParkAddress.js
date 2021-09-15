// react-redux
import React from 'react'

const ParkAddress = ({ address: {line1, line2, line3, city, state, postal} }) => {
    return(
        <ul className="park-address">
            <li>{line1}</li>
            {line2 === "" ? null : <li>{line2}</li>}
            {line3 === "" ? null : <li>{line2}</li>}
            <li>{city}, {state} {postal}</li>
        </ul>
    )
}

export default ParkAddress