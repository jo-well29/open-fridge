import React from 'react'
import './styles/Filter.css'

const Filter = () => {
    return (
        <div className="filter">
            <input type="range" min="5" max="120" value="50" />
        </div>
    )
}

export default Filter