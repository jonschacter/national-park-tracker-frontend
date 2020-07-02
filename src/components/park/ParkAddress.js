import React from 'react'

const ParkAddress = ({ address }) => {
    const renderAddress = () => {
        return(
            <div className="park-address">
                <p>{address.line1}</p>
                { address.line2 === "" ? null : <p>{address.line2}</p>}
                { address.line3 === "" ? null : <p>{address.line2}</p>}
                <p>{address.city}, {address.state} {address.postal}</p>
            </div>
        )
    }
    
    return(
        <div className="address">
            {renderAddress()}
        </div>
    )
}

export default ParkAddress