import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Park = ({ park }) => {
    const [count, setCount] = useState(0);

    return(
        <div className="park">
            <p>
                <Link to={`/parks/${park.id}`} dangerouslySetInnerHTML={{__html: park.name}}></Link> - {park.states}
                <button onClick={() => setCount(count + 1)}>{count}</button>
            </p>
        </div>
    )
}

export default Park