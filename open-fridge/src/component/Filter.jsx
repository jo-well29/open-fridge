import React from 'react'
import './styles/Filter.css'
import ToggleHeader from './shared/ToggleHeader'
import FilterButton from './shared/FilterButton'
import { flavors } from '../config'

const Filter = (props) => {
    console.log(flavors)
    const flavorButtons = flavors.map(flavor => (<FilterButton name={flavor} onClick={(e) => props.onSelect(e, 'filterFlavor')}>{flavor}</FilterButton>));
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
                        <FilterButton name="Hot" onClick={props.tempToggle} />
                        <FilterButton name="Cold" onClick={props.tempToggle} />
                    </div>
                    <div className="flavor">
                        <h3>Flavor</h3>
                        <div className="attributes">
                            { flavorButtons }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;
