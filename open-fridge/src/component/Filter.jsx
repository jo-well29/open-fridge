import React from 'react'
import './styles/Filter.css'

const Filter = () => {
    return (
        <div className="filter">
            <h3>Time</h3>
            <input type="range" min="5" max="120" className="slider" />
            <div className="temperature">
                <h3>Temperature</h3>
                <button>Hot</button>
                <button>Cold</button>
            </div>
            <div className="flavor">
                <h3>Flavor</h3>
                <div className="attributes">
                <button>Sweet</button>
                <button>Savory</button>
                <button>Tangy</button>
                <button>Dry</button>
                <button>Saucy</button>
                <button>Soupy</button>
                <button>Plain</button>
                <button>Mild</button>
                <button>Spicy</button>
                <button>Soft</button>
                <button>Chewy</button>
                <button>Crunchy</button>
                </div>

            </div>
        </div>
    )
}

export default Filter