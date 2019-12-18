import React from 'react'
import './styles/Filter.css'
import ToggleHeader from './shared/ToggleHeader'
import FilterButton from './shared/FilterButton'

const Filter = (props) => {
    return (
        <>
            <ToggleHeader onClick={props.onClick} expand={props.expand} sectionName="filter" label="Filter" color="magenta" />
            <div className={`content ${props.expand === 'filter' ? 'expand' : 'contract'}`}>
                <div className="filter">
                    <h3>Time</h3>
                    <input name="filterTime" type="range" step="15" value={props.formData.filterTime} min="15" max="60" className="slider" onChange={props.onChange} />
                    <p>{props.formData.filterTime} minutes</p>
                    <div className="temperature">
                        <h3>Temperature</h3>
                        <FilterButton name="Hot" onClick={props.onSelect} list='filterTemp' />
                        <FilterButton name="Cold" onClick={props.onSelect} list='filterTemp' />
                    </div>
                    <div className="flavor">
                        <h3>Flavor</h3>
                        <div className="attributes">
                            <button name="Sweet" onClick={(e) => props.onSelect(e, 'filterFlavor')}>Sweet</button>
                            <button name="Savory" onClick={(e) => props.onSelect(e, 'filterFlavor')}>Savory</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Tangy</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Dry</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Saucy</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Soupy</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Plain</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Mild</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Spicy</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Soft</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Chewy</button>
                            <button onClick={(e) => props.onSelect(e, 'filterFlavor')}>Crunchy</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;
