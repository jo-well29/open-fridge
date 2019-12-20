import React from 'react'
import './styles/Filter.css'
import ToggleHeader from './shared/ToggleHeader'
import FilterButton from './shared/FilterButton'
import { flavors } from '../config'
const Filter = ({ formData, onSelect, onClick, onChange, tempToggle, expand }) => {
    const flavorButtons = flavors.map((flavor, i) => (<FilterButton key={i} name={flavor} className={formData.filterFlavor.includes(flavor) ? 'selected' : ''} onClick={(e) => onSelect(e, 'filterFlavor')}>{flavor}</FilterButton>));
    return (
        <>
            <ToggleHeader onClick={onClick} expand={expand} sectionName="filter" label="Filter" color="magenta" />
            <div className={`content filter ${expand === 'filter' ? 'expand' : 'contract'}`}>
                <div className="time-container">
                    <h3>Time</h3>
                    <div className="scale">
                        <input name="filterTime" type="range" step="15" value={formData.filterTime} min="15" max="60" className="slider" onChange={onChange} />
                        <p>{formData.filterTime} minutes</p>
                    </div>
                </div>
                <div className="temperature">
                    <h3>Temperature</h3>
                    <FilterButton name="Hot" className={formData.filterTemp === 'Hot' ? 'selected' : ''} onClick={tempToggle} />
                    <FilterButton name="Cold" className={formData.filterTemp === 'Cold' ? 'selected' : ''} onClick={tempToggle} />
                </div>
                <div className="flavor">
                    <h3>Flavor</h3>
                    <div className="attributes">
                        {flavorButtons}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Filter;